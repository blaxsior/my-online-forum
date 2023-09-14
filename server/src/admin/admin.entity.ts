import { Channel } from '../channel/channel.entity';
import { User } from '../user/user.entity';
import {
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

/**
 * 채널 관리자를 의미하는 엔티티
 */
@Entity()
export class Admin {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * 관리자 타입(top 관리자 등).
   * A1, A2 이런 식으로 표현할 수 있을 것 같음
   */
  @Column()
  type: string;
  /**
   * 관리자 유저 id. 필수
   */
  @Column()
  user_id: number;
  /**
   * 관리하는 채널 id. 없으면 슈퍼 관리자 취급
   */
  @Column()
  chan_id?: string;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;

  @ManyToOne(() => User, (user) => user.admin_infos)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Channel, (chan) => chan.admins, { nullable: true })
  @JoinColumn({ name: 'chan_id' })
  channel?: Channel;
}
