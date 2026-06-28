import { Type } from 'class-transformer';
import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUsersDto {
  @IsInt()
  @IsNotEmpty()
  @Type(() => Number)
  id: number;
  @IsString()
  @IsNotEmpty()
  @MinLength(3, { message: 'meow moew' })
  @MaxLength(20)
  name: string;
  @IsInt()
  @IsNotEmpty()
  age: number;
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(6)
  gender: string;
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    {
      message:
        'Password must contain uppercase, lowercase, number, and special character',
    },
  )
  password: string;
}
