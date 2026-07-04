import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FleetService } from './fleet.service';

@Controller('fleet')
export class FleetController {
  constructor(private readonly fleetService: FleetService) {}

  @Post('vehicles')
  addVehicle(@Body() createVehicleDto: any) {
    return this.fleetService.addVehicle(createVehicleDto);
  }

  @Get('operator/:operatorId')
  getOperatorFleet(@Param('operatorId') operatorId: string) {
    return this.fleetService.getOperatorFleet(operatorId);
  }

  @Get('vehicles/:id')
  getVehicleDetails(@Param('id') id: string) {
    return this.fleetService.getVehicleDetails(id);
  }

  @Patch('vehicles/:id')
  updateVehicle(@Param('id') id: string, @Body() updateVehicleDto: any) {
    return this.fleetService.updateVehicle(id, updateVehicleDto);
  }

  @Delete('vehicles/:id')
  removeVehicle(@Param('id') id: string) {
    return this.fleetService.removeVehicle(id);
  }
}
