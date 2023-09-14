import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { OutUserDto } from './dtos/out-user.dto';
import { JwtGuard } from 'src/auth/guards/jwt.guard';

@Serialize(OutUserDto)
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(JwtGuard)
  @Get(':id')
  async getUser(@Param('id') id: number) {
    const user = await this.userService.findOne({ id });
    return user;
  }
}
