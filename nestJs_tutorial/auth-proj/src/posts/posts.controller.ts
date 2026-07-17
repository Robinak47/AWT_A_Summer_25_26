import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostsDto } from './create-posts.dto';
import { Posts } from './posts.entity';
import { UpdatePostDto } from './update-post.dto';
import { JwtGuard } from 'src/auth/jwtGuard';
import { RolesGuard } from 'src/auth/roles/roles.guard';
import { roles } from 'src/auth/roles.decrator';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post('createPost')
  createPost(@Body() createPostsDto: CreatePostsDto): Promise<Posts> {
    return this.postsService.createPost(createPostsDto);
  }

  @UseGuards(JwtGuard, RolesGuard)
  @Get('getAllPosts')
  @roles('admin', 'student')
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
