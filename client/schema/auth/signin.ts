import * as z from 'zod';

// signup에서 merge해서 사용됨
export const signinSchema = z.object({
  login_id: z
    .string({
      required_error: '아이디는 필수 정보입니다.',
    })
    .min(5, '아이디는 최소 5자리입니다.')
    .max(20, '아이디는 최대 20자리입니다.'),
  password: z
    .string({
      required_error: '비밀번호는 필수 정보입니다.',
    })
    .min(8, '비밀번호는 최소 8자리입니다.')
    .max(20, '비밀번호는 최대 20자리입니다.'),
});

export type SignInDataType = z.infer<typeof signinSchema>;
