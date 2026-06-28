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
  Put,
  Patch,
  ParamData,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUsersDto } from './dtos/create-users-dto';
import { UpdateUsersDto } from './dtos/update-users-dto';
import { ParamDto } from './dtos/param-dto';

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
  createUser(@Body() body: CreateUsersDto) {
    console.log(body);
    console.log(body instanceof CreateUsersDto);
  }

  @Put(':id')
  UpdateUsers(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateUsersDto,
  ) {
    console.log(body);
    return 'user Updated Fully';
  }

  @Patch(':id')
  UpdateUsersPartially(@Param() id: ParamDto, @Body() body: UpdateUsersDto) {
    console.log(body);
    return 'user Updated Partially';
  }
}
