'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { User2Icon, LockIcon, MailIcon, FormInputIcon } from 'lucide-react';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { SignUpDataType, signupSchema } from '@/schema/auth/signup';
import { signupAction } from '@/actions/auth/signup';
import { useToast } from '@/components/ui/use-toast';
import { useRouter } from 'next/navigation';

// https://stackoverflow.com/questions/73695535/how-to-check-confirm-password-with-zod
function SignupForm() {
  const { toast } = useToast();
  const router = useRouter(); // redirect 사용시 에러 발생
  const form = useForm<SignUpDataType>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: '',
      confirmPassword: '',
      email: '',
      password: '',
      login_id: '',
    },
  });
  const { isSubmitting } = form.formState;

  const onSubmit = async (data: SignUpDataType) => {
    const result = await signupAction(data);

    if (result.error) {
      toast({
        variant: 'destructive',
        title: result.message,
      });
      return;
    }

    form.reset({
      confirmPassword: '',
      email: '',
      login_id: '',
      name: '',
      password: '',
    });

    return router.replace('/');
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
              <FormDescription>아이디는 5 ~ 20자리입니다.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <div className="flex flex-row items-center gap-2">
                <FormLabel>
                  <FormInputIcon />
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="닉네임"
                    {...field}
                    disabled={isSubmitting}
                  />
                </FormControl>
              </div>
              <FormDescription>닉네임은 2 ~ 20자리입니다.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <div className="flex flex-row items-center gap-2">
                <FormLabel>
                  <MailIcon />
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="메일"
                    {...field}
                    disabled={isSubmitting}
                  />
                </FormControl>
              </div>
              <FormDescription>
                메일은 계정 정보를 찾는데 사용됩니다.
              </FormDescription>
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
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <div className="flex flex-row items-center gap-2">
                <FormLabel>
                  <LockIcon />
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="confirm"
                    {...field}
                    type="password"
                    disabled={isSubmitting}
                  />
                </FormControl>
              </div>
              <FormDescription>
                비밀번호는 8 ~ 20자리 사이입니다.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-row justify-end items-center">
          <Button type="submit" size="sm" disabled={isSubmitting}>
            submit
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default SignupForm;
