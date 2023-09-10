// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
'use client';
import { Dropdown, type CustomFlowbiteTheme } from 'flowbite-react'
import Link from "next/link";

interface DropDownNavItemProps {
  navName: string;
  items?: {
    name: string,
    href: string,
  }[][]
  noItemsMessage?: string;
}

const theme: CustomFlowbiteTheme['dropdown'] = {
  content: 'font-medium py-1 focus:outline-none',
  inlineWrapper: 'font-medium flex items-center'
}

const DropdownNavItem: React.FC<DropDownNavItemProps> = (
  { navName, items = [], noItemsMessage = '아이템이 없습니다.' }
) => {
  const menuItems = items.map(
    (group, idx) => {
      const list = group.map(it => (
        <Dropdown.Item as={Link} href={it.href}>
          {it.name}
        </Dropdown.Item>
      ));
      if (idx < items.length - 1) {
        list.push(<Dropdown.Divider/>);
      }
      return list;
    });
  // outline-none => 버튼 클릭했을 때 테두리 남는거 없앰
  return (
    <li>
      <Dropdown theme={theme} inline className='font-normal'  size='small' label={navName}>
        {
          menuItems.length > 0 ? menuItems
            :
            <Dropdown.Item>{noItemsMessage}</Dropdown.Item>
        }
      </Dropdown>
    </li>
  );
}

export default DropdownNavItem;