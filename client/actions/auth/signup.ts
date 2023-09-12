'use server';
import { SignUpDataType } from '@/schema/auth/signup';
import { IException } from '../interface/error';

export async function signupAction(
  data: SignUpDataType,
): Promise<never | IException> {
  console.log(process.env);
  const response = await fetch(`${process.env.SERVER}/auth/signup`, {
    method: 'post',
    body: JSON.stringify({
      login_id: data.login_id,
      email: data.email,
      name: data.name,
      password: data.password,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  console.log(response.ok);
  return await response.json();
}
