import * as z from 'zod';

export const recoverPWSchema = z.object({
  email: z
    .string({
      required_error: '이메일은 필수 정보입니다.',
    })
    .email('이메일 구조가 맞지 않습니다.'),
});

export type RecoverPwDataType = z.infer<typeof recoverPWSchema>;
