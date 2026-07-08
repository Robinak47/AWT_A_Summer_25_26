import { Type } from 'class-transformer';
import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreateUsersDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsString()
  @IsNotEmpty()
  gender: string;
  @IsInt()
  @IsNotEmpty()
  @Type(() => Number)
  age: number;
  @IsEmail()
  @IsNotEmpty()
  email: string;
}
