import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { SERVER } from '@/lib/config';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

interface ProfilePageProps {
  params: {
    uid: string;
  };
}

export default async function ProfilePage({ params }: ProfilePageProps) {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    redirect('/auth');
  }

  const req = await fetch(`${SERVER}/user/${params.uid}`, {
    headers: {
      'Accept-Type': 'application.json',
      Authorization: `Bearer ${session.backendToken.access_token}`,
    },
  });

  if (!req.ok) {
    return <div>not work</div>;
  }

  return <div>{JSON.stringify(await req.json())}</div>;
}
