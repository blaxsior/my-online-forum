import { AUTH_SECRET, SERVER } from '@/lib/config';
import NextAuth, { type AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { IException } from '@/actions/interface/error';
export const authOptions: AuthOptions = {
  secret: AUTH_SECRET,
  pages: {
    signIn: '/auth',
  },
  providers: [
    CredentialsProvider({
      name: 'credential',
      credentials: {
        login_id: { label: 'Login', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        if (!credentials?.login_id || !credentials?.password) return null;

        const response = await fetch(`${SERVER}/auth/signin`, {
          method: 'post',
          body: JSON.stringify({
            login_id: credentials.login_id,
            password: credentials.password,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        // nestjs에서 에러 던지는 경우에 해당error, message...
        if (!response.ok && data.error) {
          const { message } = data as IException;
          throw new Error(message); // 다른건 설정 힘든듯?
        }
        return data;
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
