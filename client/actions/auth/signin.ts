'use server';
import { SignInDataType } from '@/schema/auth/signin';
import { IException } from '../interface/error';

export async function signinAction(
  data: SignInDataType,
): Promise<never | IException> {
  const response = await fetch(`${process.env.SERVER}/auth/signin`, {
    method: 'post',
    body: JSON.stringify({
      login_id: data.login_id,
      password: data.password,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return await response.json();
}
