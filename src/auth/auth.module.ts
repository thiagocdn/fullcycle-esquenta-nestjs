import { Module } from '@nestjs/common';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { PartnerUsersController } from './partner-users/partner-users.controller';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: 'secretKey',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [UsersController, PartnerUsersController, AuthController],
  providers: [UsersService, AuthService],
})
export class AuthModule {}
