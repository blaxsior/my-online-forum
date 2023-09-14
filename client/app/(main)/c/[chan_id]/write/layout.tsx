import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { ReactNode } from 'react';

interface WritePageLogicProps {
  children?: ReactNode;
}

export default async function WritePageLogic({
  children,
}: WritePageLogicProps) {
  const session = await getServerSession(authOptions);

  if (!session?.user) redirect('/auth');

  return <>{children}</>;
}
