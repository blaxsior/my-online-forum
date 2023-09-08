import { UserCircle2Icon } from 'lucide-react';
import Link from 'next/link';

const UserMenu = () => {
  return (
    <div className='flex flex-row gap-2 items-center'>
      <Link href='/auth'>
        <div>
          <UserCircle2Icon className='w-9 h-9 ' />
        </div>
      </Link>
    </div>);
}

export default UserMenu;