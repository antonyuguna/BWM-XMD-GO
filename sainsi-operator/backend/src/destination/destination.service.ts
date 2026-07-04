import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import {
  Destination,
  DestinationDocument,
} from '../schemas/destination.schema';
import { Experience, ExperienceDocument } from '../schemas/experience.schema';
import {
  SafetyReport,
  SafetyReportDocument,
} from '../schemas/safety-report.schema';
import {
  WeatherCache,
  WeatherCacheDocument,
} from '../schemas/weather-cache.schema';
import { Question, QuestionDocument } from '../schemas/question.schema';
import { Operator, OperatorDocument } from '../schemas/operator.schema';
import { Review, ReviewDocument } from '../schemas/review.schema';

@Injectable()
export class DestinationService {
  constructor(
    @InjectModel(Destination.name)
    private destinationModel: Model<DestinationDocument>,
    @InjectModel(Experience.name)
    private experienceModel: Model<ExperienceDocument>,
    @InjectModel(SafetyReport.name)
    private safetyReportModel: Model<SafetyReportDocument>,
    @InjectModel(WeatherCache.name)
    private weatherCacheModel: Model<WeatherCacheDocument>,
    @InjectModel(Question.name) private questionModel: Model<QuestionDocument>,
    @InjectModel(Operator.name) private operatorModel: Model<OperatorDocument>,
    @InjectModel(Review.name) private reviewModel: Model<ReviewDocument>,
  ) {}

  async findAll(limit: number = 10): Promise<Destination[]> {
    return this.destinationModel.find().limit(limit).exec();
  }

  async findOne(id: string): Promise<Destination | null> {
    return this.destinationModel
      .findById(id)
      .populate('similarDestinations')
      .exec();
  }

  async getExperiences(destinationId: string): Promise<Experience[]> {
    return this.experienceModel
      .find({ destination: destinationId })
      .populate('operator')
      .exec();
  }

  async getSafetyReport(destinationId: string): Promise<SafetyReport | null> {
    return this.safetyReportModel
      .findOne({ destination: destinationId })
      .exec();
  }

  async getWeather(destinationId: string): Promise<WeatherCache | null> {
    // In a real scenario, this would check if cache is expired and fetch from a real weather API
    return this.weatherCacheModel
      .findOne({ destination: destinationId })
      .exec();
  }

  async getOperators(destinationId: string): Promise<Operator[]> {
    // Find operators that have experiences in this destination
    const experiences = await this.experienceModel
      .find({ destination: destinationId })
      .distinct('operator')
      .exec();
    return this.operatorModel.find({ _id: { $in: experiences } }).exec();
  }

  async getQuestions(destinationId: string): Promise<Question[]> {
    return this.questionModel
      .find({ destination: destinationId })
      .populate('user')
      .populate('answers.author')
      .sort({ upvotes: -1 })
      .exec();
  }

  async getReviews(destinationId: string): Promise<Review[]> {
    // Need to find bookings for experiences in this destination, then find reviews for those bookings.
    // For simplicity, assuming Review might have a destination field or we look up by operator.
    // Here we'll just mock looking up by operator IDs in this destination.
    const operators = await this.getOperators(destinationId);
    const operatorIds = operators.map((op: any) => op._id);
    return this.reviewModel
      .find({ operator: { $in: operatorIds } })
      .populate('reviewer')
      .exec();
  }
}
