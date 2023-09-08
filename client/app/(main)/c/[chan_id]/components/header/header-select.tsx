'use client';
import { revalidateTag } from "next/cache";
import { ChangeEvent, useEffect, useLayoutEffect, useState } from "react";

export interface HeaderSelectProps {
  placeholder?: string;
  query: string;
  options?: {
    name: string;
    value: string;
  }[];
  onChange?: (name: string, value: string) => void;
};

const HeaderSelect: React.FC<HeaderSelectProps> = ({ placeholder = '', options, onChange, query }) => {
  const [option, setOption] = useState<string>('');

  const changeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    setOption(e.target.value);
    onChange?.(query, e.target.value);
  };

  return (
    <select name={query} placeholder={placeholder} onChange={changeHandler} value={option} className='text-xs border-2 p-1 space-x-1 outline-none border-base-400 m-0'>
      {options?.map(it => <option value={it.value} key={it.value}>{it.name}</option>)}
    </select>
  );
}

export default HeaderSelect;
