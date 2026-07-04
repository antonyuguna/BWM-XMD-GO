import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OperatorService } from './operator.service';

@Controller('operators')
export class OperatorController {
  constructor(private readonly operatorService: OperatorService) {}

  @Post()
  create(@Body() createOperatorDto: any) {
    return this.operatorService.create(createOperatorDto);
  }

  @Get()
  findAll() {
    return this.operatorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.operatorService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOperatorDto: any) {
    return this.operatorService.update(id, updateOperatorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.operatorService.remove(id);
  }
}
