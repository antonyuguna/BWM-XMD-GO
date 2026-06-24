import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type OperatorDocument = Operator & Document;

@Schema({ timestamps: true })
export class Operator {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true, unique: true })
  user: Types.ObjectId;

  @Prop({ required: true })
  companyName: string;

  @Prop()
  description: string;

  @Prop()
  contactEmail: string;

  @Prop()
  contactPhone: string;

  @Prop()
  website: string;

  @Prop([String])
  socialMediaUrls: string[];

  @Prop([String])
  operatingRegions: string[];

  @Prop({ type: String, enum: ['pending', 'verified', 'rejected'], default: 'pending' })
  verificationStatus: string;

  @Prop([String])
  documents: string[];

  @Prop()
  logoUrl: string;

  @Prop()
  coverImageUrl: string;

  @Prop([String])
  galleryUrls: string[];
}

export const OperatorSchema = SchemaFactory.createForClass(Operator);
