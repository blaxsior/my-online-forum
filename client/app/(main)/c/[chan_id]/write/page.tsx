'use client';

import 'react-quill/dist/quill.snow.css';
import './components/section.css';

import { useState } from 'react';
import * as z from 'zod';

import { UnprivilegedEditor } from 'react-quill';
import dynamic from 'next/dynamic';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import Spinner from '@/components/spinner';
import { Button } from '@/components/ui/button';
import { moduleOptions } from './components/quill.config';

interface WritePageProps {
  params: {
    chan_id: string;
  };
}

const articleSchema = z.object({
  title: z.string().min(1),
  content: z.string().min(1),
});

type ArticleSchemaType = z.infer<typeof articleSchema>;

const ReactQuill = dynamic(() => import('react-quill'), {
  ssr: false,
  loading: () => <Spinner />,
});

/**
 * 게시글 작성 페이지. 로그인해야 들어올 수 있음.
 */
export default function WritePage({ params }: WritePageProps) {
  const router = useRouter();
  const [wcount, setWCount] = useState(0);

  const form = useForm<ArticleSchemaType>({
    resolver: zodResolver(articleSchema),
    defaultValues: {
      title: '',
      content: '',
    },
  });

  function onQuillDataChange(
    v: string,
    _1: never,
    _2: never,
    editor: UnprivilegedEditor,
  ) {
    form.setValue('content', v);
    form.trigger('content');
    // 직접 값 지정
    setWCount(editor.getLength() - 1); // 항상 개행 포함
  }

  function onSubmit(data: ArticleSchemaType) {
    console.log(data);
    form.reset({
      title: '',
      content: '',
    });
    router.replace(`/c/${params.chan_id}`);
  }
  // form에 유저 정보도 삽입되어야 함 -> 로그인 기능 구현 후
  return (
    <div className="m-4">
      <form
        className="space-y-4 flex flex-col"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        {/* title 영역 */}
        <div className="flex space-x-1">
          <label
            htmlFor="title"
            className="px-2 py-[1px] border-[3px] border-gray-400bg-gray-200 text-lg rounded-md"
          >
            제목
          </label>
          <input
            {...form.register('title')}
            type="text"
            className="w-auto flex-1 px-2 border-2 border-gray-400 focus:border-blue-500 outline-none rounded-md"
          />
        </div>
        {/* content 영역 */}
        <div className="border-2 border-base-400 rounded-md">
          <ReactQuill
            theme="snow"
            onChange={onQuillDataChange}
            modules={moduleOptions}
          />
          <div className="border-t-2 text-right p-2">문자 개수: {wcount}</div>
        </div>
        {!form.formState.isValid && <div>form not valid</div>}
        {/* button 영역 */}
        <Button type="submit" className="w-fit float-right">
          작성
        </Button>
      </form>
    </div>
  );
}
