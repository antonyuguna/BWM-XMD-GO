import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type PricingRuleDocument = PricingRule & Document;

@Schema({ timestamps: true })
export class PricingRule {
  @Prop({ type: Types.ObjectId, ref: 'Operator', required: true })
  operator: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Vehicle' }) // Optional: if applies to specific vehicle
  vehicle: Types.ObjectId;

  @Prop({ required: true })
  name: string; // e.g., "Weekend Rate", "Summer Peak"

  @Prop({ type: String, enum: ['percentage', 'fixed'], required: true })
  type: string;

  @Prop({ required: true })
  value: number; // e.g., 20 (for +20%) or 50 (for +$50)

  @Prop()
  startDate: Date;

  @Prop()
  endDate: Date;
}

export const PricingRuleSchema = SchemaFactory.createForClass(PricingRule);
