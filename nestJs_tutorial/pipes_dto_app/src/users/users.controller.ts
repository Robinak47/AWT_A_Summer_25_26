import {
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseIntPipe,
  Query,
  Post,
  Body,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateDecoratorOptions } from '@nestjs/core';
import { CreateUsersDTO } from './dtos/create-user-dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAllIUser() {
    return 'this is the user list';
  }

  @Get(':id')
  getUserWithId(
    @Param('id', ParseIntPipe) id: any,
    @Query('postType', new DefaultValuePipe(10), ParseIntPipe) postType: any,
  ) {
    console.log(typeof id);
    console.log(postType);
  }

  @Post()
  createUser(@Body(new ValidationPipe()) createUserDto: CreateUsersDTO) {
    console.log(createUserDto);
  }
}
