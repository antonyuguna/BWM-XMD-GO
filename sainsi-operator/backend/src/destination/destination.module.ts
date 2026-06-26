import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DestinationController } from './destination.controller';
import { DestinationService } from './destination.service';
import { Destination, DestinationSchema } from '../schemas/destination.schema';
import { Experience, ExperienceSchema } from '../schemas/experience.schema';
import { SafetyReport, SafetyReportSchema } from '../schemas/safety-report.schema';
import { WeatherCache, WeatherCacheSchema } from '../schemas/weather-cache.schema';
import { Question, QuestionSchema } from '../schemas/question.schema';
import { Operator, OperatorSchema } from '../schemas/operator.schema';
import { Review, ReviewSchema } from '../schemas/review.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Destination.name, schema: DestinationSchema },
      { name: Experience.name, schema: ExperienceSchema },
      { name: SafetyReport.name, schema: SafetyReportSchema },
      { name: WeatherCache.name, schema: WeatherCacheSchema },
      { name: Question.name, schema: QuestionSchema },
      { name: Operator.name, schema: OperatorSchema },
      { name: Review.name, schema: ReviewSchema },
    ]),
  ],
  controllers: [DestinationController],
  providers: [DestinationService],
  exports: [DestinationService],
})
export class DestinationModule {}
