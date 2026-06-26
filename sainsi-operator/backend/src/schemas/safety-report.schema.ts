import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type SafetyReportDocument = SafetyReport & Document;

@Schema({ timestamps: true })
export class SafetyReport {
  @Prop({ type: Types.ObjectId, ref: 'Destination', required: true })
  destination: Types.ObjectId;

  @Prop({ required: true })
  overallScore: number;

  @Prop()
  roadConditions: string;

  @Prop()
  healthFacilities: string;

  @Prop([String])
  emergencyContacts: string[];

  @Prop([String])
  wildlifeAlerts: string[];

  @Prop([String])
  politicalAdvisories: string[];

  @Prop([String])
  weatherRisks: string[];

  @Prop()
  cellCoverage: string; // e.g. "Excellent", "Poor"

  @Prop()
  internetQuality: string;

  @Prop()
  airQuality: string;

  @Prop()
  waterSafety: string;

  @Prop([String])
  emergencyRecommendations: string[];
}

export const SafetyReportSchema = SchemaFactory.createForClass(SafetyReport);
