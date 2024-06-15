import { Body, Controller, Post } from '@nestjs/common';
import { LoginDTO } from './login.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  login(@Body() data: LoginDTO) {
    return this.authService.login(data);
  }
}
