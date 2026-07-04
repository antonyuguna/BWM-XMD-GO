import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { BookingService } from './booking.service';

@Controller('bookings')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Post()
  create(@Body() createBookingDto: any) {
    return this.bookingService.create(createBookingDto);
  }

  @Get('operator/:operatorId')
  getOperatorBookings(@Param('operatorId') operatorId: string) {
    return this.bookingService.findByOperator(operatorId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookingService.findOne(id);
  }

  @Patch(':id/status')
  updateStatus(@Param('id') id: string, @Body('status') status: string) {
    return this.bookingService.updateStatus(id, status);
  }

  @Get('trips/operator/:operatorId')
  getOperatorTrips(@Param('operatorId') operatorId: string) {
    return this.bookingService.getTripsByOperator(operatorId);
  }
}
