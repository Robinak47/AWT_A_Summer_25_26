import { Injectable, Delete, Inject, forwardRef } from '@nestjs/common';
import { PostsService } from 'src/posts/posts.service';

@Injectable()
export class UsersService {

    constructor(@Inject(forwardRef(()=>PostsService)) private readonly postService:PostsService)
    {

    }

    sayMyName():string
    {
        return "My Name is Hygenburg";
    }

    sayMyNameFromParam(name:string):string
    {
        return `my name is ${name}`;
    }

    getUser(id:string)
    {
        return (id=='1')?true:false;
    }

    getUserWithMostPost()
    {
        const posts=this.postService.userIdWithPostCount();
        const userWithMostPost = posts.reduce(
            (acc, cur) => (cur.postCount > acc.postCount ? cur : acc),
            posts[0]
          );

          return userWithMostPost;
    }

    
}
