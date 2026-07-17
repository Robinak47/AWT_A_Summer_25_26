import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Passports } from './passports.entity';
import { Repository } from 'typeorm';
import { CreatePassportDto } from './create-passport.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class PassportsService {
  constructor(
    @InjectRepository(Passports)
    private readonly passportsRepo: Repository<Passports>,
    private readonly userService: UsersService,
  ) {}

  async createPassport(
    createPassportDto: CreatePassportDto,
  ): Promise<Passports> {
    const user = await this.userService.getUserById(createPassportDto.userId);

    if (user != null) {
      const pas = this.passportsRepo.create({
        ...createPassportDto,
        users: user,
      });

      return await this.passportsRepo.save(pas);
    } else {
      throw new BadRequestException('user not Found');
    }
  }
}
