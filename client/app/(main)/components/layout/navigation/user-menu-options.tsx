'use client';

import { CustomFlowbiteTheme, Dropdown } from 'flowbite-react';
import { UserCircle2Icon } from 'lucide-react';
import { signOut } from 'next-auth/react';
import Link from 'next/link';

interface UserMenuProps {
  uid: number;
  uname: string;
}

const theme: CustomFlowbiteTheme['dropdown'] = {
  content: 'font-medium py-1 focus:outline-none',
  inlineWrapper: 'font-medium flex items-center',
};

const UserMenuOptions = ({ uid, uname }: UserMenuProps) => {
  return (
    <div className="flex flex-row space-x-4 items-center">
      <div className="text-lg">{uname}</div>
      <Dropdown
        theme={theme}
        inline
        className="font-normal"
        size="small"
        label={<UserCircle2Icon className="w-9 h-9 " />}
      >
        <Dropdown.Item>
          <Link href={`/profile/${uid}`}>profile</Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <button onClick={async () => await signOut()}>sign out</button>
        </Dropdown.Item>
      </Dropdown>
    </div>
  );
};

export default UserMenuOptions;
