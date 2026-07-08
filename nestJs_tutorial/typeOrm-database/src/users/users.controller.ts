import {
  Controller,
  Post,
  UseInterceptors,
  BadRequestException,
  Body,
  UploadedFile,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { CreateUsersDto } from './dtos/create-users-dto';
import { Users } from './users.entity';
import { UpdateUsersDto } from './dtos/update-users-dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('create-user')
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
  createUser(
    @Body() createUserDto: CreateUsersDto,
    @UploadedFile() file: Express.Multer.File,
  ): Promise<Users> {
    return this.usersService.createUser(createUserDto, file);
  }

  @Get('All-users')
  getAllUSers(): Promise<Users[]> {
    return this.usersService.getAllUsers();
  }

  @Get(':findUserById/:id')
  getUserById(@Param('id', ParseIntPipe) id: number): Promise<Users | null> {
    return this.usersService.getUserById(id);
  }

  @Patch(':updateUserById/:id')
  updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUsersDto: UpdateUsersDto,
  ): Promise<Users> {
    return this.usersService.updateUser(id, updateUsersDto);
  }

  @Delete(':delete-user/:id')
  deleteUser(@Param('id', ParseIntPipe) id: number): Promise<string> {
    return this.usersService.deleteUser(id);
  }
}
