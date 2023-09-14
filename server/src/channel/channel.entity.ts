import { Admin } from 'src/admin/admin.entity';
import {
  Column,
  Entity,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Unique,
  OneToMany,
} from 'typeorm';

@Entity()
@Unique(['name']) // 채널의 이름은 고유해야 함
export class Channel {
  /**
   * 채널의 id 값. 각 채널 주소 파라미터로 사용됨
   */
  @PrimaryColumn('varchar')
  chan_id: string;

  /**
   * 채널의 이름
   */
  @Column()
  name: string;

  /**
   * 채널에 대한 설명(1줄 정도), nullable
   */
  @Column({ nullable: true })
  description: string;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;

  @OneToMany(() => Admin, (admins) => admins.channel)
  admins: Admin[];
}
