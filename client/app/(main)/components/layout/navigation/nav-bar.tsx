import Link from 'next/link';
import MainIcon from '@/components/icons/main-icon';
import NavList from './NavList';
import UserMenu from './user-menu';

function NavBar() {
  return (
    <nav className="text-white w-100% text-base font-semibold px-10 py-3 bg-slate-700 flex flex-row justify-between items-center">
      <Link href="/" className="mr-6">
        <MainIcon />
      </Link>
      <NavList />
      <div className="ml-auto mr-0" />
      <UserMenu />
    </nav>
  );
}

export default NavBar;
