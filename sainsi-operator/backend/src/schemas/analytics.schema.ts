import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type AnalyticsDocument = Analytics & Document;

@Schema({ timestamps: true })
export class Analytics {
  @Prop({ type: Types.ObjectId, ref: 'Operator', required: true })
  operator: Types.ObjectId;

  @Prop({ required: true })
  date: Date; // Often stored per day/month

  @Prop({ default: 0 })
  revenue: number;

  @Prop({ default: 0 })
  bookingsCount: number;

  @Prop({ default: 0 })
  completedTripsCount: number;

  @Prop({ default: 0 })
  fleetUtilizationPercent: number;
}

export const AnalyticsSchema = SchemaFactory.createForClass(Analytics);
