import { Expose } from 'class-transformer';

export class OutUserDto {
  @Expose()
  id: number;

  @Expose()
  name: string;
}
