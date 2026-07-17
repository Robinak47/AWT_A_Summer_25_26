import { Type } from 'class-transformer';
import { IsNotEmpty, IsString, IsInt } from 'class-validator';

export class CreatePassportDto {
  @IsString()
  @IsNotEmpty()
  nationality: string;

  @IsInt()
  @IsNotEmpty()
  @Type(() => Number)
  userId: number;
}
