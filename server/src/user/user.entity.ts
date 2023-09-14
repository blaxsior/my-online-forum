import { Admin } from 'src/admin/admin.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
@Unique(['login_id'])
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  /**
   * 로그인에 사용되는 id. 중복 불가
   */
  @Column()
  login_id: string;
  /**
   * 계정 복구에 사용되는 이메일 주소
   */
  @Column()
  email: string;
  /**
   * 유저 이름
   */
  @Column()
  name: string;
  /**
   * 유저 비밀번호. salt 이용하여 암호화
   */
  @Column()
  password: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Admin, (admin) => admin.user, { nullable: true })
  admin_infos: Admin[];
}
