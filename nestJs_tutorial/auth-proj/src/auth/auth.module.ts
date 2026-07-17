import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from 'src/users/users.module';
import { JwtGuard } from './jwtGuard';
import { JwtStrategy } from './jwtStrategy';
import { RolesGuard } from './roles/roles.guard';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: 'meow-meow',
      signOptions: {
        expiresIn: '1H',
      },
    }),

    UsersModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtGuard, JwtStrategy, RolesGuard],
})
export class AuthModule {}
