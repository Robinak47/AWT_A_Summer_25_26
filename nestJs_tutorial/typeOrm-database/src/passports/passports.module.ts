import { Module } from '@nestjs/common';
import { PassportsService } from './passports.service';
import { PassportsController } from './passports.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Passports } from './passports.entity';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([Passports]), UsersModule],
  controllers: [PassportsController],
  providers: [PassportsService],
})
export class PassportsModule {}
