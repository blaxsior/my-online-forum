import * as z from 'zod';
import { signinSchema } from './signin';

/**
 * 사용자 추가 정보 / 비밀번호 확인에 해당
 */
const _signupSchema = z.object({
  name: z
    .string({
      required_error: '닉네임은 필수 정보입니다.',
    })
    .min(2, '닉네임은 2글자 이상이어야 합니다.')
    .max(20, '닉네임은 20글자 이하여야 합니다.'),
  email: z
    .string({
      required_error: '이메일은 필수 정보입니다.',
    })
    .email('이메일 구조가 맞지 않습니다.'),
  confirmPassword: z.string({
    required_error: '비밀번호를 확인해주세요',
  }),
});
// https://stackoverflow.com/questions/73695535/how-to-check-confirm-password-with-zod
export const signupSchema = _signupSchema
  .merge(signinSchema)
  .refine((data) => data.password === data.confirmPassword, {
    message: '비밀번호가 일치하지 않습니다.',
    path: ['confirmPassword'], // 여기로 에러 발생
  });

export type SignUpDataType = z.infer<typeof signupSchema>;
