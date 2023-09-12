'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { User2Icon, LockIcon } from 'lucide-react';
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
import { signIn } from 'next-auth/react';
import { SignInDataType, signinSchema } from '@/schema/auth/signin';
import { useToast } from '@/components/ui/use-toast';
import { useRouter } from 'next/navigation';

function SigninForm() {
  const router = useRouter();
  const { toast } = useToast();
  const form = useForm<SignInDataType>({
    resolver: zodResolver(signinSchema),
    defaultValues: {
      password: '',
      login_id: '',
    },
  });

  const { isSubmitting } = form.formState;

  const onSubmit = async (data: SignInDataType) => {
    try {
      const response = await signIn('credentials', {
        redirect: false,
        login_id: data.login_id,
        password: data.password,
      });
      // console.log(response);
      if (response?.error) {
        console.log(response);
        toast({
          variant: 'destructive',
          title: response.error,
        });
        return;
      }
      router.push('/');
    } catch (e) {
      console.log(e);
    }
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
