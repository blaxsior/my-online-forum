import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDownIcon } from "lucide-react";
import Link from "next/link";

interface DropDownNavItemProps {
  navName: string;
  items?: {
    name: string,
    href: string,
  }[][]
  noItemsMessage?: string;
}

const DropdownNavItem: React.FC<DropDownNavItemProps> = (
  { navName: name, items = [], noItemsMessage = '아이템이 없습니다.' }
) => {
  const menuItems = items.map(
    (group, idx) => {
      const list = group.map(it => (
        <DropdownMenuItem key={it.href}>
          <Link href={it.href}>
            {it.name}
          </Link>
        </DropdownMenuItem>
      ));
      if (idx < items.length - 1) {
        list.push(<DropdownMenuSeparator key={`s-${name}:${idx}`} />);
      }
      return list;
    });
    // outline-none => 버튼 클릭했을 때 테두리 남는거 없앰
  return (
    <li>
      <DropdownMenu>
        <DropdownMenuTrigger className="outline-none">
          <div className="flex gap-1 items-center">
            <span className="">{name}</span>
            <span>
              <ChevronDownIcon className="w-4 h-4" />
            </span>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {
            menuItems.length > 0 ? menuItems 
            : 
            <DropdownMenuItem disabled={true}>{noItemsMessage}</DropdownMenuItem>
          }
        </DropdownMenuContent>
      </DropdownMenu>
    </li>
  );
}

export default DropdownNavItem;