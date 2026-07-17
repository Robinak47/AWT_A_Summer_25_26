import { BadRequestException, Injectable, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Posts } from './posts.entity';
import { Repository } from 'typeorm';
import { UsersService } from 'src/users/users.service';
import { CreatePostsDto } from './create-posts.dto';
import { Users } from 'src/users/users.entity';
import { UpdatePostDto } from './update-post.dto';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Posts) private readonly postRepo: Repository<Posts>,
    private readonly userService: UsersService,
  ) {}

  async createPost(createPostsDto: CreatePostsDto): Promise<Posts> {
    const user = await this.userService.getUserById(createPostsDto.userId);

    if (user == null) {
      throw new BadRequestException('user not found');
    }

    const post = this.postRepo.create({
      ...createPostsDto,
      users: user,
    });

    return await this.postRepo.save(post);
  }

  async getAllPosts(): Promise<Posts[]> {
    return await this.postRepo.find({
      relations: {
        users: true,
      },
    });
  }

  async getPostById(id: number): Promise<Posts | null> {
    return await this.postRepo.findOne({
      where: {
        id: id,
      },
    });
  }

  async updatePost(updatePostDto: UpdatePostDto, id: number): Promise<Posts> {
    const post = await this.getPostById(id);
    if (post == null) {
      throw new BadRequestException('Post Not Found');
    }

    Object.assign(post, updatePostDto);
    return await this.postRepo.save(post);
  }

  async deletePost(id: number): Promise<string> {
    const result = await this.postRepo.delete(id);
    if (result.affected == 0) {
      return 'post not found';
    }

    return `post id: ${id} deleted successfully`;
  }
}
