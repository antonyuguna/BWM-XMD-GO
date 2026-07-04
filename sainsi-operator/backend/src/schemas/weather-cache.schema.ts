import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type WeatherCacheDocument = WeatherCache & Document;

@Schema({ timestamps: true })
export class WeatherCache {
  @Prop({
    type: Types.ObjectId,
    ref: 'Destination',
    required: true,
    unique: true,
  })
  destination: Types.ObjectId;

  @Prop({ type: Object, required: true })
  currentWeather: any; // e.g. { temp: 25, condition: 'Sunny', wind: 10, uvIndex: 5 }

  @Prop({ type: [Object], required: true })
  forecast7Day: any[]; // Array of daily forecasts

  @Prop({ type: [Object], required: true })
  forecastHourly: any[]; // Array of hourly forecasts for next 24-48h

  @Prop([String])
  alerts: string[]; // Weather alerts

  @Prop({ required: true })
  lastUpdated: Date;

  @Prop({ required: true })
  expiresAt: Date;
}

export const WeatherCacheSchema = SchemaFactory.createForClass(WeatherCache);
