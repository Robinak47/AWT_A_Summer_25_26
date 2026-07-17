import {
  Body,
  Controller,
  Post,
  UseInterceptors,
  BadRequestException,
  UploadedFile,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterUserDto } from './register-user.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { LoginDto } from './login.dto';
import { JwtGuard } from './jwtGuard';
import { roles } from './roles.decrator';
import { RolesGuard } from './roles/roles.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(JwtGuard, RolesGuard)
  @Post('register-user')
  @roles('admin', 'faculty', 'student')
  @UseInterceptors(
    FileInterceptor('pro_pic', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const fileName = Date.now() + '_' + file.originalname;
          cb(null, fileName);
        },
      }),

      fileFilter: (req, file, cb) => {
        if (file.originalname.match(/^.*\.(jpg|jpeg|pdf)$/)) {
          cb(null, true);
        } else {
          cb(
            new BadRequestException('file not staisfied the accepted types'),
            false,
          );
        }
      },
      limits: {
        fileSize: 3 * 1024 * 1024,
      },
    }),
  )
  registerUser(
    @Body() registerUserDto: RegisterUserDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.authService.registerUser(registerUserDto, file);
  }

  @Post('login')
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }
}
