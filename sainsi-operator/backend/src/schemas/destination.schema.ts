import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type DestinationDocument = Destination & Document;

@Schema({ timestamps: true })
export class Destination {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  country: string;

  @Prop()
  heroImageUrl: string;

  @Prop()
  heroVideoUrl: string;

  @Prop({ default: 0 })
  rating: number;

  @Prop({ default: 0 })
  reviewCount: number;

  @Prop()
  aiIntroduction: string;

  // Quick Facts
  @Prop()
  elevation: string;

  @Prop()
  climate: string;

  @Prop([String])
  languages: string[];

  @Prop()
  currency: string;

  @Prop()
  bestSeason: string;

  @Prop()
  difficulty: string; // e.g. "Moderate", "Easy"

  @Prop()
  averageCostPerDay: number;

  @Prop({ default: false })
  familyFriendly: boolean;

  @Prop({ default: 0 })
  accessibilityScore: number;

  @Prop({ default: 0 })
  safetyScore: number;

  @Prop()
  averageStayDays: number;

  @Prop()
  localTimeZone: string;

  // AI Summary Details
  @Prop([String])
  whyVisit: string[];

  @Prop([String])
  whoShouldVisit: string[];

  @Prop([String])
  bestActivities: string[];

  @Prop([String])
  hiddenGems: string[];

  @Prop([String])
  localEtiquette: string[];

  @Prop([String])
  travelTips: string[];

  @Prop([{ url: String, caption: String, photographer: String, location: String }])
  imageGallery: { url: string; caption: string; photographer: string; location: string }[];

  @Prop({ type: { type: String, enum: ['Point'], default: 'Point' }, coordinates: { type: [Number] } })
  location: {
    type: string;
    coordinates: number[]; // [longitude, latitude]
  };

  @Prop([{ type: Types.ObjectId, ref: 'Destination' }])
  similarDestinations: Types.ObjectId[];
}

export const DestinationSchema = SchemaFactory.createForClass(Destination);
DestinationSchema.index({ location: '2dsphere' });
