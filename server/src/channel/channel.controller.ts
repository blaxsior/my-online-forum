import { Controller, Post, Put, Body, Get, Param } from '@nestjs/common';
import { CreateChannelDto } from './dtos/create-channel.dto';
import { ChannelService } from './channel.service';
import { UpdateChannelDto } from './dtos/update-channel.dto';

@Controller('channel')
export class ChannelController {
  constructor(private chanService: ChannelService) {}
  @Post()
  async createChannel(@Body() dto: CreateChannelDto) {
    const channel = await this.chanService.create(dto);
    return channel;
  }
  /**
   * 채널 정보 중 description 수정. 최종 관리자 또는 채널 관리자여야 함.
   */
  @Put()
  async updateDescription(@Body() dto: UpdateChannelDto) {
    const channel = await this.chanService.update(dto);
    return channel;
  }

  @Get(':chan_id')
  async getChannel(@Param('chan_id') chan_id: string) {
    const channel = await this.chanService.findById(chan_id);
    return channel;
  }
}
