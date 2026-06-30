import { Controller, Post, UseInterceptors, BadRequestException, Body, UploadedFile } from '@nestjs/common';
import { UsersService } from './users.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { CreateUsersDto } from './dtos/create-users-dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post("create-user")
  @UseInterceptors(FileInterceptor('pro_pic',
      {
        storage: diskStorage(
          {
            destination: './uploads',
            filename:(req, file, cb)=>
            {
              const fileName=Date.now()+'_'+file.originalname;
              cb(null, fileName);
            }
          }
  
        ),
  
        fileFilter:(req,file, cb)=>
        {
          if(file.originalname.match(/^.*\.(jpg|jpeg|pdf)$/))
          {
            cb(null,true)
          }
          else
          {
            cb(
              new BadRequestException("file not staisfied the accepted types"),false
            )
          }
        },
        limits: 
        {
          fileSize: 3*1024*1024
        },
      
      }
    ))
  createUser(@Body() createUserDto:CreateUsersDto, @UploadedFile() file:Express.Multer.File)
  {
    return {
      message: "User Created Successfully",
      user: createUserDto,
      pro_pic: file.path
    }
  }
}
