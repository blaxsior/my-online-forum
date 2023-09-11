import React from 'react';
import { cn } from '@/lib/utils';
import DropdownNavItem from './dropdown-navitem';

interface NavListProps {
  className?: string;
}

const NavList: React.FC<NavListProps> = ({ className }) => {
  return (
    <ul className={cn('flex flex-row gap-2', className)}>
      <DropdownNavItem
        navName="구독"
        noItemsMessage="구독한 채널이 없습니다."
        items={[
          [{ name: '원신 채널', href: '/c/genshin' }],
          [{ name: 'iam', href: 'student' }],
        ]}
      />
      <DropdownNavItem
        navName="주요 메뉴"
        noItemsMessage="메뉴 목록이 없습니다."
      />
    </ul>
  );
};

export default NavList;
