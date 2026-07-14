import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Delete,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostsDto } from './create-posts.dto';
import { Posts } from './posts.entity';
import { UpdatePostDto } from './update-post.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post('createPost')
  createPost(@Body() createPostsDto: CreatePostsDto): Promise<Posts> {
    return this.postsService.createPost(createPostsDto);
  }

  @Get('getAllPosts')
  getAllPosts(): Promise<Posts[]> {
    return this.postsService.getAllPosts();
  }

  @Get(':getPostById/:id')
  getPostById(@Param('id', ParseIntPipe) id: number) {
    return this.postsService.getPostById(id);
  }

  @Patch(':updatePost/:id')
  updatePost(
    @Body() updatePostDto: UpdatePostDto,
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Posts> {
    return this.postsService.updatePost(updatePostDto, id);
  }

  @Delete(':deletePost/:id')
  deletePost(@Param('id', ParseIntPipe) id: number): Promise<string> {
    return this.postsService.deletePost(id);
  }
}
