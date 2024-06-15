import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePartnerUserDTO } from './dto/create-partner-user.dto';
import { UserRoles } from './user-roles';
import * as bcrypt from 'bcrypt';
import { CreateCommonUserDTO } from './dto/create-common-user.dto';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}

  createCommonUser(data: CreateCommonUserDTO) {
    return this.prismaService.user.create({
      data: {
        ...data,
        password: this.generateHash(data.password),
        roles: [UserRoles.USER],
      },
    });
  }

  createPartnerUser(data: CreatePartnerUserDTO) {
    return this.prismaService.user.create({
      data: {
        ...data,
        password: this.generateHash(data.password),
        roles: [UserRoles.PARTNER],
      },
    });
  }

  findOne(idOrEmail: number | string) {
    return this.prismaService.user.findFirst({
      where: {
        ...(typeof idOrEmail == 'number'
          ? { id: idOrEmail }
          : { email: idOrEmail }),
      },
    });
  }

  generateHash(password: string) {
    return bcrypt.hashSync(password, 10);
  }
}
