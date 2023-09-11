'use server';

import { RecoverPwDataType } from '@/schema/auth';

export async function recover_password(data: RecoverPwDataType) {
  const result = await fetch('http://localhost:3001/auth/recover-password', {
    method: 'post',
    body: JSON.stringify({ email: data.email }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  console.log(result.ok);
  return { success: true };
}
