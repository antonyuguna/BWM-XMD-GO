import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FleetController } from './fleet.controller';
import { FleetService } from './fleet.service';
import { Fleet, FleetSchema } from '../schemas/fleet.schema';
import { Vehicle, VehicleSchema } from '../schemas/vehicle.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Fleet.name, schema: FleetSchema },
      { name: Vehicle.name, schema: VehicleSchema },
    ]),
  ],
  controllers: [FleetController],
  providers: [FleetService],
  exports: [FleetService],
})
export class FleetModule {}
