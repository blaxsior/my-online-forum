import { CheckIcon, BellIcon } from 'lucide-react';
import HeaderButton from './header-button';
import ChanIcon from './chan-icon';
import ChanDescription, { ChanDescProps } from './chan-description';
import SelectList from './select-list';
import Link from 'next/link';

const descInfo: ChanDescProps = {
  admin: {
    username: '운영자',
    link: '/u/abcdefg'
  },
  description: '뉴비는 공지로 | 닥눈삼',
  sub_count: 3000
};

interface ChanHeaderProps {
  chan_url: string;
}

const ChannelHeader: React.FC<ChanHeaderProps> = ({chan_url: href}) => {
  return (
    <header className='border-b-[1px] border-base-400'>
      <div className='flex flex-row p-4 space-x-4 items-center '>
        <Link href={href}>
          <ChanIcon src='/slime.webp' />
        </Link>
        {/* header */}
        <div className='flex-grow'>
          <div className='flex flex-row items-center justify-between'>
            <h1 className='font-medium text-lg'>원신 채널</h1>
            <div className='space-x-1'>
              <HeaderButton>
                <BellIcon className='w-4 h-4 inline-block' />
                <span>알림</span>
              </HeaderButton>
              <HeaderButton>
                <CheckIcon className='w-4 h-4 inline-block' />
                <span>구독하기</span>
              </HeaderButton>
            </div>
          </div>
          <ChanDescription {...descInfo} />
        </div>
      </div>
      <SelectList />
    </header >
  );
}

export default ChannelHeader;