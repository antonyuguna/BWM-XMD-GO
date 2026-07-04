import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type ExperienceDocument = Experience & Document;

@Schema({ timestamps: true })
export class Experience {
  @Prop({ type: Types.ObjectId, ref: 'Destination', required: true })
  destination: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Operator', required: true })
  operator: Types.ObjectId;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop([String])
  images: string[];

  @Prop({ required: true })
  price: number;

  @Prop({ required: true }) // Duration in hours or days (e.g. "4 hours", "3 days")
  duration: string;

  @Prop()
  difficulty: string; // e.g. "Easy", "Moderate", "Hard"

  @Prop({ default: 0 })
  rating: number;

  @Prop({ default: 0 })
  reviewCount: number;

  @Prop({ default: true })
  availability: boolean;

  @Prop({ default: false })
  guideIncluded: boolean;

  @Prop([String])
  languages: string[];

  @Prop([String])
  includedItems: string[];

  @Prop([String])
  whatToBring: string[];
}

export const ExperienceSchema = SchemaFactory.createForClass(Experience);
