import { IsString } from 'class-validator';

export class UpdateChannelDto {
  @IsString()
  chan_id: string;

  @IsString()
  description?: string;
}
