import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Fleet, FleetDocument } from '../schemas/fleet.schema';
import { Vehicle, VehicleDocument } from '../schemas/vehicle.schema';

@Injectable()
export class FleetService {
  constructor(
    @InjectModel(Fleet.name) private fleetModel: Model<FleetDocument>,
    @InjectModel(Vehicle.name) private vehicleModel: Model<VehicleDocument>,
  ) {}

  async addVehicle(createVehicleDto: any): Promise<Vehicle> {
    const createdVehicle = new this.vehicleModel(createVehicleDto);
    const vehicle = await createdVehicle.save();

    await this.fleetModel.findOneAndUpdate(
      { operator: createVehicleDto.operator },
      { $push: { vehicles: vehicle._id } },
      { upsert: true, new: true },
    );

    return vehicle;
  }

  async getOperatorFleet(operatorId: string): Promise<Fleet | null> {
    return this.fleetModel
      .findOne({ operator: operatorId })
      .populate('vehicles')
      .exec();
  }

  async getVehicleDetails(id: string): Promise<Vehicle | null> {
    return this.vehicleModel.findById(id).exec();
  }

  async updateVehicle(
    id: string,
    updateVehicleDto: any,
  ): Promise<Vehicle | null> {
    return this.vehicleModel
      .findByIdAndUpdate(id, updateVehicleDto, { new: true })
      .exec();
  }

  async removeVehicle(id: string): Promise<any> {
    const vehicle = await this.vehicleModel.findByIdAndDelete(id).exec();
    if (vehicle) {
      await this.fleetModel.findOneAndUpdate(
        { operator: vehicle.operator },
        { $pull: { vehicles: vehicle._id } },
      );
    }
    return vehicle;
  }
}
