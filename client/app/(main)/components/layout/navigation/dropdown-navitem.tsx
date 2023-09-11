'use client';

import { Dropdown, type CustomFlowbiteTheme } from 'flowbite-react';
import Link from 'next/link';

interface DropDownNavItemProps {
  navName: string;
  items?: {
    name: string;
    href: string;
  }[][];
  noItemsMessage?: string;
}

const theme: CustomFlowbiteTheme['dropdown'] = {
  content: 'font-medium py-1 focus:outline-none',
  inlineWrapper: 'font-medium flex items-center',
};

const DropdownNavItem: React.FC<DropDownNavItemProps> = ({
  navName,
  items = [],
  noItemsMessage = '아이템이 없습니다.',
}) => {
  const menuItems = items.map((group, idx) => {
    // as={Link}가 공식문서에서는 가능하다고 하는데, 에러 메시지 보여줌
    const list = group.map((it) => (
      <Dropdown.Item key={it.href}>
        <Link href={it.href}>{it.name}</Link>
      </Dropdown.Item>
    ));
    if (idx < items.length - 1) {
      list.push(<Dropdown.Divider />);
    }
    return list;
  });
  // outline-none => 버튼 클릭했을 때 테두리 남는거 없앰
  return (
    <li>
      <Dropdown
        theme={theme}
        inline
        className="font-normal"
        size="small"
        label={navName}
      >
        {menuItems.length > 0 ? (
          menuItems
        ) : (
          <Dropdown.Item>{noItemsMessage}</Dropdown.Item>
        )}
      </Dropdown>
    </li>
  );
};

export default DropdownNavItem;
