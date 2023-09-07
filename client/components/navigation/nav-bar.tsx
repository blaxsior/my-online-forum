import MainIcon from '../icons/main-icon';
import Link from 'next/link';
import NavList from './NavList';
import UserMenu from './user-menu';
import { UserCircle2 } from 'lucide-react';

const NavBar = () => {
  return (
    <nav className='text-white text-base font-semibold px-10 py-3 bg-slate-700 flex flex-row justify-between items-center'>
      <Link href='/' className='mr-6'>
        <MainIcon />
      </Link>
      <NavList />
      <div className='ml-auto mr-0'></div>
      <UserMenu />
    </nav>
  )
};

export default NavBar;