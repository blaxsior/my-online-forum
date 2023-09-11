import { CheckIcon, BellIcon } from 'lucide-react';
import ChanIcon from '@/components/chan-icon';
import Link from 'next/link';
import HeaderButton from './header-button';
import ChanDescription, { ChanDescProps } from './chan-description';
import SelectList from './select-list';

const descInfo: ChanDescProps = {
  admin: {
    username: '운영자',
    link: '/u/abcdefg',
  },
  description: '뉴비는 공지로 | 닥눈삼',
  sub_count: 3000,
};

interface ChanHeaderProps {
  chan_url: string;
}

const ChannelHeader: React.FC<ChanHeaderProps> = ({ chan_url }) => {
  return (
    <header>
      <div className="flex flex-row p-4 space-x-4 items-center border-b-[1px] border-base-400">
        <Link href={chan_url}>
          <ChanIcon src="/slime.webp" />
        </Link>
        {/* header */}
        <div className="flex-grow">
          <div className="flex flex-row items-center justify-between">
            <Link href={chan_url}>
              <h1 className="font-medium text-lg">원신 채널</h1>
            </Link>
            <div className="space-x-1">
              <HeaderButton>
                <BellIcon className="w-4 h-4 inline-block" />
                <span>알림</span>
              </HeaderButton>
              <HeaderButton>
                <CheckIcon className="w-4 h-4 inline-block" />
                <span>구독하기</span>
              </HeaderButton>
            </div>
          </div>
          <ChanDescription {...descInfo} />
        </div>
      </div>
    </header>
  );
};

export default ChannelHeader;
