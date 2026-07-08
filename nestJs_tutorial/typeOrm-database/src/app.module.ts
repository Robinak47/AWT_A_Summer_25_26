import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FilesModule } from './files/files.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportsModule } from './passports/passports.module';

@Module({
  imports: [
    FilesModule,
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      username: 'postgres',
      password: 'admin',
      port: 5432,
      host: 'localhost',
      database: 'awt_a_s',
      synchronize: true,
      autoLoadEntities: true,
    }),
    PassportsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
