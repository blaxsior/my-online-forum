'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { User2Icon, LockIcon } from 'lucide-react';
import * as z from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

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
    .max(12, '비밀번호는 최대 12자리입니다.'),
});

export type SignInDataType = z.infer<typeof signinSchema>;

function SigninForm() {
  const form = useForm<SignInDataType>({
    resolver: zodResolver(signinSchema),
    defaultValues: {
      password: '',
      login_id: '',
    },
  });

  const { isSubmitting } = form.formState;

  const onSubmit = (data: SignInDataType) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <FormField
          control={form.control}
          name="login_id"
          render={({ field }) => (
            <FormItem>
              <div className="flex flex-row items-center gap-2">
                <FormLabel>
                  <User2Icon />
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="아이디"
                    {...field}
                    disabled={isSubmitting}
                  />
                </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <div className="flex flex-row items-center gap-2">
                <FormLabel>
                  <LockIcon />
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="password"
                    {...field}
                    type="password"
                    disabled={isSubmitting}
                  />
                </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-row justify-between items-center">
          <Link
            href="/auth/recover-password"
            className="text-muted-foreground hover:text-gray-800"
          >
            비밀번호 찾기
          </Link>
          <Button type="submit" size="sm" disabled={isSubmitting}>
            submit
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default SigninForm;
