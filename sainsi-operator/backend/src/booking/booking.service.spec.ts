import { Test, TestingModule } from '@nestjs/testing';
import { BookingService } from './booking.service';
import { getModelToken } from '@nestjs/mongoose';
import { Booking } from '../schemas/booking.schema';
import { Trip } from '../schemas/trip.schema';
import { InternalServerErrorException } from '@nestjs/common';
import { Types } from 'mongoose';

describe('BookingService', () => {
  let service: BookingService;

  const mockBookingModel = {
    findByIdAndUpdate: jest.fn(),
  };

  const mockTripModel = {
    create: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BookingService,
        {
          provide: getModelToken(Booking.name),
          useValue: mockBookingModel,
        },
        {
          provide: getModelToken(Trip.name),
          useValue: mockTripModel,
        },
      ],
    }).compile();

    service = module.get<BookingService>(BookingService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('updateStatus', () => {
    const mockBookingId = new Types.ObjectId().toString();
    const mockOperatorId = new Types.ObjectId().toString();
    const mockVehicleId = new Types.ObjectId().toString();

    it('should confirm booking and create a trip successfully', async () => {
      const mockBooking = {
        _id: mockBookingId,
        operator: mockOperatorId,
        vehicle: mockVehicleId,
        status: 'confirmed',
      };

      mockBookingModel.findByIdAndUpdate.mockReturnValue({
        exec: jest.fn().mockResolvedValue(mockBooking),
      });

      mockTripModel.create.mockResolvedValue({
        booking: mockBookingId,
        operator: mockOperatorId,
        vehicle: mockVehicleId,
        status: 'scheduled',
      });

      const result = await service.updateStatus(mockBookingId, 'confirmed');

      expect(mockBookingModel.findByIdAndUpdate).toHaveBeenCalledWith(
        mockBookingId,
        { status: 'confirmed' },
        { new: true },
      );
      expect(mockTripModel.create).toHaveBeenCalledWith({
        booking: mockBookingId,
        operator: mockOperatorId,
        vehicle: mockVehicleId,
        status: 'scheduled',
      });
      expect(result).toEqual(mockBooking);
    });

    it('should revert booking to pending and throw InternalServerErrorException when trip creation fails', async () => {
      const mockBookingConfirmed = {
        _id: mockBookingId,
        operator: mockOperatorId,
        vehicle: mockVehicleId,
        status: 'confirmed',
      };

      const mockBookingPending = {
        _id: mockBookingId,
        operator: mockOperatorId,
        vehicle: mockVehicleId,
        status: 'pending',
      };

      mockBookingModel.findByIdAndUpdate
        .mockReturnValueOnce({
          exec: jest.fn().mockResolvedValue(mockBookingConfirmed),
        })
        .mockReturnValueOnce({
          exec: jest.fn().mockResolvedValue(mockBookingPending),
        });

      mockTripModel.create.mockRejectedValue(new Error('DB Error'));

      await expect(service.updateStatus(mockBookingId, 'confirmed')).rejects.toThrow(InternalServerErrorException);

      expect(mockBookingModel.findByIdAndUpdate).toHaveBeenNthCalledWith(
        1,
        mockBookingId,
        { status: 'confirmed' },
        { new: true },
      );
      expect(mockTripModel.create).toHaveBeenCalledWith({
        booking: mockBookingId,
        operator: mockOperatorId,
        vehicle: mockVehicleId,
        status: 'scheduled',
      });
      expect(mockBookingModel.findByIdAndUpdate).toHaveBeenNthCalledWith(
        2,
        mockBookingId,
        { status: 'pending' },
        { new: true },
      );
    });

    it('should update booking status when not confirmed without creating a trip', async () => {
      const mockBooking = {
        _id: mockBookingId,
        operator: mockOperatorId,
        vehicle: mockVehicleId,
        status: 'cancelled',
      };

      mockBookingModel.findByIdAndUpdate.mockReturnValue({
        exec: jest.fn().mockResolvedValue(mockBooking),
      });

      const result = await service.updateStatus(mockBookingId, 'cancelled');

      expect(mockBookingModel.findByIdAndUpdate).toHaveBeenCalledWith(
        mockBookingId,
        { status: 'cancelled' },
        { new: true },
      );
      expect(mockTripModel.create).not.toHaveBeenCalled();
      expect(result).toEqual(mockBooking);
    });
  });
});
