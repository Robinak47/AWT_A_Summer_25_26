import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class PostsService {

    constructor(@Inject(forwardRef(()=>UsersService))  private readonly usersService:UsersService)
    {
        
    }

    createPost(post:any):string
    {
        const foundUser:boolean=this.usersService.getUser(post.id);
        if(foundUser)
        {
            return 'post created';
        }
        else
        {
            return 'user not found';
        }
    }

    getUserWithMostPost()
    {
        const user=this.usersService.getUserWithMostPost();
        return `user with most post. id ${user.id}, post count: ${user.postCount}`
    }


    userIdWithPostCount()
    {
        return [{id:1, postCount:4}, {id:2, postCount:6}]
    }
}
