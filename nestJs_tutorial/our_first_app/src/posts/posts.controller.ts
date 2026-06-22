import { Body, Controller, Post, Get } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  createPosts(@Body() post:any):string
  {
    return this.postsService.createPost(post)
  }

  @Get()
  getUserWithMostPost()
  {
    return this.postsService.getUserWithMostPost();
  }
}
