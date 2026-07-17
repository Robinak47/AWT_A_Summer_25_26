import {
  BadGatewayException,
  BadRequestException,
  Injectable,
} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { RegisterUserDto } from './register-user.dto';
import { Multer } from 'multer';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './login.dto';
import { JwtService } from '@nestjs/jwt';
import { promises } from 'dns';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async registerUser(
    registerUserDto: RegisterUserDto,
    file: Express.Multer.File,
  ) {
    const hashPass = await bcrypt.hash(registerUserDto.password, 10);

    registerUserDto.password = hashPass;

    return await this.usersService.createUser(registerUserDto, file);
  }

  async login(loginDto: LoginDto) {
    const user = await this.usersService.getUserById(loginDto.userId);
    console.log(user);
    if (user == null) {
      throw new BadRequestException('user not found');
    }

    const passMatch = await bcrypt.compare(loginDto.password, user.password);

    if (!passMatch) {
      throw new BadRequestException('Password not Matched');
    }

    const payLoad = {
      id: user.id,
      email: user.email,
      role: user.role,
    };
    const accessToken = this.jwtService.sign(payLoad);

    return { accessToken };
  }
}
