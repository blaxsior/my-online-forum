'use client';
import { FileTextIcon, StarIcon, PenBoxIcon } from "lucide-react";
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { useCallback } from "react";
import { addAndGetQueryString } from "@/lib/params";

import HeaderButton from "./header-button";
import HeaderSelect from "./header-select";
import Link from "next/link";

const options = [{ name: '등록순', value: '0' }, { name: '추천순', value: '1' }, { name: '시간순', value: '2' }, { name: '댓글 많은 순', value: '3' }];

const SelectList = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const getUrl = useCallback((name: string, value: string) => {
    const queryString = addAndGetQueryString(searchParams, [{ name, value }]);
    return `${pathname}?${queryString}`;
  }, [addAndGetQueryString, searchParams]);

  const queryHandler = (name: string, value: string) => {
    const url_string = getUrl(name, value);
    router.push(url_string); // 쿼리에 따라 다른 글 가져오는 동작 필요
  };

  return (
    <div className='flex flex-row items-center px-2 py-1'>
      <HeaderButton
        onClick={() => {
          queryHandler('mode', '');
        }}>
        <FileTextIcon className='w-4 h-4 inline-block' />
        <span>전체글</span>
      </HeaderButton>
      <HeaderButton className='bg-red-500 hover:bg-red-700 text-white font-medium'
        onClick={() => {
          queryHandler('mode', 'best');
        }}>
        <StarIcon className='w-4 h-4 inline-block' />
        <span>개념글</span>
      </HeaderButton>
      <HeaderSelect options={options} query={'sort'} onChange={queryHandler} />
      <Link href={`${pathname}/write`} className='ml-auto mr-0'>
        <HeaderButton >
          <PenBoxIcon className='w-4 h-4 inline-block' />
          <span>글쓰기</span>
        </HeaderButton>
      </Link>
    </div>
  );
}

export default SelectList;