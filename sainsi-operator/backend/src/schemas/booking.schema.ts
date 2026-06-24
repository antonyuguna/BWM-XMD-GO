import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type BookingDocument = Booking & Document;

@Schema({ timestamps: true })
export class Booking {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  tourist: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Operator', required: true })
  operator: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Vehicle' })
  vehicle: Types.ObjectId;

  @Prop({ required: true })
  startDate: Date;

  @Prop({ required: true })
  endDate: Date;

  @Prop({ required: true })
  destination: string;

  @Prop({ required: true })
  groupSize: number;

  @Prop({ required: true })
  totalPrice: number;

  @Prop({ type: String, enum: ['pending', 'confirmed', 'cancelled', 'completed'], default: 'pending' })
  status: string;

  @Prop({ type: String, enum: ['pending', 'paid', 'refunded'], default: 'pending' })
  paymentStatus: string;

  @Prop()
  itineraryDetails: string;
}

export const BookingSchema = SchemaFactory.createForClass(Booking);
