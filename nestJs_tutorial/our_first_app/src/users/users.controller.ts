import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';


@Controller('users')
export class UsersController {

    constructor(private readonly userService:UsersService)
    {
       
    }

    @Get()
    sayUserName():string
    {
        return this.userService.sayMyName();

    }

    @Post()
    sayUserNameFromParam(@Body() req:any):string
    {
        return this.userService.sayMyNameFromParam(req.name);
    }

    
   
}
