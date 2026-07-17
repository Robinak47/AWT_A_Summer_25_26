import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './users.entity';
import { Repository } from 'typeorm';
import { CreateUsersDto } from './dtos/create-users-dto';
import { UpdateUsersDto } from './dtos/update-users-dto';
import { RegisterUserDto } from 'src/auth/register-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users) private readonly usersRepo: Repository<Users>,
  ) {}

  async createUser(
    createUserDto: RegisterUserDto,
    profilePic: Express.Multer.File,
  ): Promise<Users> {
    const user = this.usersRepo.create({
      ...createUserDto,
      profilePic: profilePic.path,
    });

    return await this.usersRepo.save(user);
  }

  async getAllUsers(): Promise<Users[]> {
    return await this.usersRepo.find({
      select: {
        id: true,
        name: true,
        email: true,
        age: true,
        profilePic: true,
      },
    });
  }

  async getUserById(id: number): Promise<Users | null> {
    const user = await this.usersRepo.findOne({
      where: {
        id: id,
      },
    });

    return user;
  }

  async updateUser(id: number, updateUserDto: UpdateUsersDto): Promise<Users> {
    const user = await this.getUserById(id);
    if (user != null) {
      Object.assign(user, updateUserDto);
      return await this.usersRepo.save(user);
    } else {
      throw new BadRequestException('user not Found');
    }
  }

  async deleteUser(id: number): Promise<string> {
    const result = await this.usersRepo.delete(id);

    if (result.affected == 0) {
      return `user not found`;
    }
    return `user deleted with id ${id}`;
  }
}
