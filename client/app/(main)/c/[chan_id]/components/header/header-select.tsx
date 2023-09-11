'use client';

import { useSearchParams } from 'next/navigation';
import { ChangeEvent, useLayoutEffect, useState } from 'react';

export interface HeaderSelectProps {
  placeholder?: string;
  query: string;
  options?: {
    name: string;
    value: string;
  }[];
  onChange?: (name: string, value: string) => void;
}
/**
 * 채널 헤더 영역에서 사용되는 select 엘리먼트. 채널 헤드에서 사용
 * @returns
 */
const HeaderSelect: React.FC<HeaderSelectProps> = ({
  placeholder = '',
  options,
  onChange,
  query,
}) => {
  const searchParams = useSearchParams();
  const [option, setOption] = useState<string>('');

  useLayoutEffect(() => {
    const value = searchParams.get(query);
    if (value) {
      setOption(value);
    }
  }, []);

  const changeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    setOption(e.target.value);
    onChange?.(query, e.target.value);
  };

  return (
    <select
      name={query}
      placeholder={placeholder}
      onChange={changeHandler}
      value={option}
      className="text-xs border-2 p-1 space-x-1 outline-none border-base-400 m-0"
    >
      {options?.map((it) => (
        <option value={it.value} key={it.value}>
          {it.name}
        </option>
      ))}
    </select>
  );
};

export default HeaderSelect;
