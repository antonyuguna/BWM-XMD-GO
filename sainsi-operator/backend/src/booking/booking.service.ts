import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Booking, BookingDocument } from '../schemas/booking.schema';
import { Trip, TripDocument } from '../schemas/trip.schema';
import { CreateBookingDto } from './dto/create-booking.dto';

@Injectable()
export class BookingService {
  constructor(
    @InjectModel(Booking.name) private bookingModel: Model<BookingDocument>,
    @InjectModel(Trip.name) private tripModel: Model<TripDocument>,
  ) {}

  async create(createBookingDto: CreateBookingDto): Promise<Booking> {
    const createdBooking = new this.bookingModel(createBookingDto);
    return createdBooking.save();
  }

  async findByOperator(operatorId: string): Promise<Booking[]> {
    return this.bookingModel.find({ operator: operatorId }).populate('tourist').populate('vehicle').exec();
  }

  async findOne(id: string): Promise<Booking | null> {
    return this.bookingModel.findById(id).populate('tourist').populate('vehicle').exec();
  }

  async updateStatus(id: string, status: string): Promise<Booking | null> {
    const booking = await this.bookingModel.findByIdAndUpdate(id, { status }, { new: true }).exec();

    if (booking && status === 'confirmed') {
        // Automatically create a trip when a booking is confirmed
        await this.tripModel.create({
            booking: booking._id,
            operator: booking.operator,
            vehicle: booking.vehicle,
            status: 'scheduled'
        });
    }

    return booking;
  }

  async getTripsByOperator(operatorId: string): Promise<Trip[]> {
      return this.tripModel.find({ operator: operatorId }).populate('booking').populate('vehicle').exec();
  }
}
