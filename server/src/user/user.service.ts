import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { User } from './user.entity';
import { UserIdentifier } from './user.interface';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}
  /**
   * 대응되는 유저 존재 여부를 반환
   * @param user_key user을 식별할 수 있는 정보
   * @returns 대응되는 유저 존재 여부
   */
  async isUserExist(user_key: UserIdentifier) {
    if (user_key == null || Object.keys(user_key).length === 0) return false;

    return await this.userRepo.exist({
      where: {
        ...user_key,
      },
    });
  }

  async create(data: {
    login_id: string;
    name: string;
    email: string;
    passwordWithSalt: string;
  }) {
    const user = new User();
    user.login_id = data.login_id;
    user.name = data.name;
    user.email = data.email;
    user.password = data.passwordWithSalt;

    return await this.userRepo.save(user);
  }

  async update(
    id: number,
    data: {
      name: string;
      email: string;
      passwordWithSalt: string;
    },
  ) {
    const user = await this.userRepo.findOneBy({ id });

    if (user == null) {
      throw new NotFoundException('user not found');
    }
    Object.assign(user, data);

    return await this.userRepo.save(user);
  }

  async findOne(user_key: UserIdentifier) {
    if (user_key == null || Object.keys(user_key).length === 0) return null;
    return await this.userRepo.findOneBy({
      ...user_key,
    });
  }
}
