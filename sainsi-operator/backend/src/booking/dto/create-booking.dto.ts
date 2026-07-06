import { IsDateString, IsMongoId, IsNotEmpty, IsNumber, IsOptional, IsString, Min } from 'class-validator';

export class CreateBookingDto {
  @IsMongoId()
  @IsNotEmpty()
  tourist: string;

  @IsMongoId()
  @IsNotEmpty()
  operator: string;

  @IsMongoId()
  @IsOptional()
  vehicle?: string;

  @IsDateString()
  @IsNotEmpty()
  startDate: string;

  @IsDateString()
  @IsNotEmpty()
  endDate: string;

  @IsString()
  @IsNotEmpty()
  destination: string;

  @IsNumber()
  @Min(1)
  @IsNotEmpty()
  groupSize: number;

  @IsNumber()
  @Min(0)
  @IsNotEmpty()
  totalPrice: number;

  @IsString()
  @IsOptional()
  status?: string;

  @IsString()
  @IsOptional()
  paymentStatus?: string;

  @IsString()
  @IsOptional()
  itineraryDetails?: string;
}
