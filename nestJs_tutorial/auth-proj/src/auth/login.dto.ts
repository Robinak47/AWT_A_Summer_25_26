import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  @IsNotEmpty()
  @IsInt()
  @Type(() => Number)
  userId: number;
  @IsNotEmpty()
  @IsString()
  password: string;
}
