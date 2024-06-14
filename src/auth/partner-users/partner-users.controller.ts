import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { CreatePartnerUserDTO } from '../users/dto/create-partner-user.dto';
import { UserPresenter } from '../users/user.presenter';

@Controller('partner/users')
export class PartnerUsersController {
  constructor(private userService: UsersService) {}

  @Post()
  async create(@Body() data: CreatePartnerUserDTO) {
    const user = await this.userService.createPartnerUser(data);
    return new UserPresenter(user);
  }
}
