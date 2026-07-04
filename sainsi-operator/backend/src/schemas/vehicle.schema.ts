import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type VehicleDocument = Vehicle & Document;

@Schema({ timestamps: true })
export class Vehicle {
  @Prop({ type: Types.ObjectId, ref: 'Operator', required: true })
  operator: Types.ObjectId;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  type: string;

  @Prop()
  description: string;

  @Prop({ required: true })
  capacity: number;

  @Prop([String])
  amenities: string[];

  @Prop({ required: true })
  dailyPrice: number;

  @Prop([String])
  images: string[];

  @Prop({ type: String, enum: ['valid', 'expired', 'none'], default: 'none' })
  insuranceStatus: string;

  @Prop({ type: Boolean, default: false })
  driverIncluded: boolean;

  @Prop({
    type: String,
    enum: ['available', 'booked', 'maintenance', 'disabled'],
    default: 'available',
  })
  availabilityStatus: string;
}

export const VehicleSchema = SchemaFactory.createForClass(Vehicle);
