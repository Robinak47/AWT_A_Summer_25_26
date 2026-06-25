import {
  IsEmail,
  IsEmpty,
  IsNotEmpty,
  IsNumber,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUsersDTO {
  @IsNumber()
  id: number;
  @IsString()
  @IsNotEmpty()
  @MinLength(10)
  @MaxLength(20)
  name: string;
  @IsEmail()
  @IsString()
  @IsEmpty()
  email: string;
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(6)
  gender: string;
  @IsNumber()
  age: number;
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(6)
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    {
      message: 'you have to follow the pattern',
    },
  )
  password: string;
}
