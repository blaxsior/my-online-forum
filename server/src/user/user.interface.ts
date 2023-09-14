import { User } from './user.entity';

export type UserIdentifier = Partial<Pick<User, 'id' | 'login_id' | 'email'>>;
