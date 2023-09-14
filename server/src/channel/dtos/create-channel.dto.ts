import { IsString, IsOptional } from 'class-validator';

export class CreateChannelDto {
  @IsString()
  chan_id: string;

  @IsString()
  name: string;

  @IsString()
  @IsOptional() // 필수 아님
  description?: string;
}
