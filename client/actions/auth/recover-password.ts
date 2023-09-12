'use server';

import { RecoverPwDataType } from '@/schema/auth/recover-password';

export async function recover_password(data: RecoverPwDataType) {
  const response = await fetch(`${process.env.SERVER}/auth/recover-password`, {
    method: 'post',
    body: JSON.stringify({ email: data.email }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  console.log(response.ok);
  return { success: true };
}
