'use client';

import { useState } from 'react';
import { MailIcon } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import Modal from '@/components/modal';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

import { recover_password } from '@/actions/auth/recover-password';
import { useToast } from '@/components/ui/use-toast';
import {
  RecoverPwDataType,
  recoverPWSchema,
} from '@/schema/auth/recover-password';

function RecoverPasswordPage() {
  const [opened, setOpen] = useState(false);
  const { toast } = useToast();

  const form = useForm<RecoverPwDataType>({
    resolver: zodResolver(recoverPWSchema),
    defaultValues: {
      email: '',
    },
  });

  const { isSubmitting } = form.formState;

  const onSubmit = async (data: RecoverPwDataType) => {
    const result = await recover_password(data);
    if (result.success) {
      toast({
        variant: 'destructive',
        title: '메일 전송에 실패했습니다',
      });
      return;
    }
    form.reset({
      email: '',
    });
    setOpen(true);
  };

  return (
    <>
      <Modal
        isOpen={opened}
        title="입력된 이메일로 비밀번호를 전송했습니다."
        onClose={() => {
          setOpen(false);
        }}
      >
        입력하신 이메일 주소로 새로운 비밀번호를 전송했습니다. 비밀번호가
        도착하지 않는 경우 다시 시도하시거나 입력하신 이메일 주소가 맞는지
        체크해주세요.
      </Modal>
      <Form {...form}>
        <div className="text-center">비밀번호 찾기</div>
        <Separator className="mt-10 mb-8" />
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
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
                      {...field}
                      placeholder="이메일"
                      disabled={isSubmitting}
                    />
                  </FormControl>
                </div>
                <FormDescription>
                  입력한 이메일 주소로 임시 비밀번호가 발송됩니다.
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
    </>
  );
}

export default RecoverPasswordPage;
