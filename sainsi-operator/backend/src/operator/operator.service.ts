import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Operator, OperatorDocument } from '../schemas/operator.schema';

@Injectable()
export class OperatorService {
  constructor(
    @InjectModel(Operator.name) private operatorModel: Model<OperatorDocument>,
  ) {}

  async create(createOperatorDto: any): Promise<Operator> {
    const createdOperator = new this.operatorModel(createOperatorDto);
    return createdOperator.save();
  }

  async findAll(): Promise<Operator[]> {
    return this.operatorModel.find().exec();
  }

  async findOne(id: string): Promise<Operator | null> {
    return this.operatorModel.findById(id).exec();
  }

  async update(id: string, updateOperatorDto: any): Promise<Operator | null> {
    return this.operatorModel
      .findByIdAndUpdate(id, updateOperatorDto, { new: true })
      .exec();
  }

  async remove(id: string): Promise<Operator | null> {
    return this.operatorModel.findByIdAndDelete(id).exec();
  }
}
