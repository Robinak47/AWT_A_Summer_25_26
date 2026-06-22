import { Module, forwardRef } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { PostsModule } from 'src/posts/posts.module';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  exports:[UsersService],
  imports:[forwardRef(()=>PostsModule)],
})
export class UsersModule {}
