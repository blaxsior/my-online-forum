import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Channel } from './channel.entity';
import { Repository } from 'typeorm';
import { CreateChannelDto } from './dtos/create-channel.dto';
import { UpdateChannelDto } from './dtos/update-channel.dto';

@Injectable()
export class ChannelService {
  constructor(
    @InjectRepository(Channel) private chanRepo: Repository<Channel>,
  ) {}
  async create(data: CreateChannelDto) {
    if (await this.isExist(data.chan_id))
      throw new BadRequestException('채널이 이미 존재합니다.');
    const channel = this.chanRepo.create();
    channel.chan_id = data.chan_id;
    channel.name = data.name;
    channel.description = data.description;

    return await this.chanRepo.save(channel);
  }
  /**
   * 채널 엔티티를 업데이트. chan_id, name은 변경X
   */
  async update(data: UpdateChannelDto) {
    if (!data?.chan_id) throw new NotFoundException('채널을 찾을 수 없습니다.'); // 데이터 맞는거 없으면 제거

    const channel = await this.chanRepo.findOneBy({ chan_id: data.chan_id });
    if (!channel) throw new NotFoundException('채널을 찾을 수 없습니다.');
    channel.description = data.description;

    return await this.chanRepo.save(channel);
  }

  async findById(id: string) {
    if (!id) return null;
    return this.chanRepo.findOneBy({ chan_id: id });
  }

  async isExist(id: string) {
    if (!id) return false;
    return this.chanRepo.exist({ where: { chan_id: id } });
  }
}
