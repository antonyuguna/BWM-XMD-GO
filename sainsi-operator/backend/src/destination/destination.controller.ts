import { Controller, Get, Param, Query } from '@nestjs/common';
import { DestinationService } from './destination.service';

@Controller('destinations')
export class DestinationController {
  constructor(private readonly destinationService: DestinationService) {}

  @Get()
  findAll(@Query('limit') limit?: number) {
    return this.destinationService.findAll(limit);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.destinationService.findOne(id);
  }

  @Get(':id/experiences')
  getExperiences(@Param('id') id: string) {
    return this.destinationService.getExperiences(id);
  }

  @Get(':id/safety')
  getSafetyReport(@Param('id') id: string) {
    return this.destinationService.getSafetyReport(id);
  }

  @Get(':id/weather')
  getWeather(@Param('id') id: string) {
    return this.destinationService.getWeather(id);
  }

  @Get(':id/operators')
  getOperators(@Param('id') id: string) {
    return this.destinationService.getOperators(id);
  }

  @Get(':id/questions')
  getQuestions(@Param('id') id: string) {
    return this.destinationService.getQuestions(id);
  }

  @Get(':id/reviews')
  getReviews(@Param('id') id: string) {
    return this.destinationService.getReviews(id);
  }
}
