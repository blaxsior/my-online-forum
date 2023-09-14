import { CheckIcon, BellIcon } from 'lucide-react';
import Link from 'next/link';
import ChanIcon from '@/components/chan-icon';
import HeaderButton from './header-button';
import { SERVER } from '@/lib/config';
import { redirect } from 'next/navigation';

interface ChanHeaderProps {
  chan_id: string;
}

export default async function ChannelHeader({ chan_id }: ChanHeaderProps) {
  const chan_url = `/c/${chan_id}`;
  const res = await fetch(`${SERVER}/channel/${chan_id}`, {
    cache: 'no-store', //항상 새로운 데이터 가져오기
  });

  if (!res.ok) redirect('/');
  // 정보 잘못된거면 메인으로 이동
  // 장기적으로는 404 페이지 이동 정도가 적당할듯?

  const { name, description } = await res.json();

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
              <h1 className="font-medium text-lg">{name}</h1>
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
          <div>
            <div className="space-x-3 flex flex-row">
              <span>구독자 {3000}명</span>
              <span>
                <Link href={'/profile/2'}>@{'운영자'}</Link>
              </span>
            </div>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </header>
  );
}
