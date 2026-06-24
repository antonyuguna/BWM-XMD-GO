import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type FleetDocument = Fleet & Document;

@Schema({ timestamps: true })
export class Fleet {
  @Prop({ type: Types.ObjectId, ref: 'Operator', required: true, unique: true })
  operator: Types.ObjectId;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Vehicle' }] })
  vehicles: Types.ObjectId[];
}

export const FleetSchema = SchemaFactory.createForClass(Fleet);
