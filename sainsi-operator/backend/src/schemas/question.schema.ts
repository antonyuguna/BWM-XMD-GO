import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type QuestionDocument = Question & Document;

@Schema({ timestamps: true })
export class Question {
  @Prop({ type: Types.ObjectId, ref: 'Destination', required: true })
  destination: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  user: Types.ObjectId;

  @Prop({ required: true })
  content: string;

  @Prop({ default: 0 })
  upvotes: number;

  @Prop({ default: 0 })
  downvotes: number;

  @Prop([
    {
      author: { type: Types.ObjectId, ref: 'User' },
      content: String,
      isAiGenerated: { type: Boolean, default: false },
      createdAt: { type: Date, default: Date.now },
      upvotes: { type: Number, default: 0 },
    },
  ])
  answers: {
    author?: Types.ObjectId;
    content: string;
    isAiGenerated: boolean;
    createdAt: Date;
    upvotes: number;
  }[];
}

export const QuestionSchema = SchemaFactory.createForClass(Question);
