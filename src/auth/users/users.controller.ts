import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserPresenter } from './user.presenter';
import { CreateCommonUserDTO } from './dto/create-common-user.dto';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post()
  async create(@Body() data: CreateCommonUserDTO) {
    const user = await this.userService.createCommonUser(data);
    return new UserPresenter(user);
  }
}
