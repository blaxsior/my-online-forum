'use client';
import { useSession } from 'next-auth/react';
import { UserCircle2Icon } from 'lucide-react';

import Link from 'next/link';
import UserMenuOptions from './user-menu-options';

function UserMenu() {
  const { data: session } = useSession();
  return (
    <div className="flex flex-row gap-2 items-center">
      {session && session.user ? (
        <UserMenuOptions uid={session.user.id} uname={session.user.name} />
      ) : (
        <Link href="/auth">
          <div>
            <UserCircle2Icon className="w-9 h-9 " />
          </div>
        </Link>
      )}
    </div>
  );
}

export default UserMenu;
