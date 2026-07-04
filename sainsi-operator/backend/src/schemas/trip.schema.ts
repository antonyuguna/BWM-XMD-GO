import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type TripDocument = Trip & Document;

@Schema({ timestamps: true })
export class Trip {
  @Prop({ type: Types.ObjectId, ref: 'Booking', required: true, unique: true })
  booking: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Operator', required: true })
  operator: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Vehicle', required: true })
  vehicle: Types.ObjectId;

  @Prop()
  driverName: string;

  @Prop()
  driverContact: string;

  @Prop({ type: String, enum: ['scheduled', 'in_progress', 'completed', 'cancelled'], default: 'scheduled' })
  status: string;

  @Prop()
  currentLocation: string; // Could be GeoJSON or string
}

export const TripSchema = SchemaFactory.createForClass(Trip);
