import { AUTH_SECRET, SERVER } from '@/lib/config';
import NextAuth, { type AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { IException } from '@/actions/interface/error';
import { JWT } from 'next-auth/jwt';

async function refreshToken(token: JWT): Promise<JWT> {
  const res = await fetch(`${SERVER}/auth/refresh`, {
    method: 'post',
    headers: {
      Authorization: `Refresh ${token.backendToken.refresh_token}`,
    },
  });

  const response = await res.json();
  // console.log(response);

  return {
    ...token,
    ...response,
  };
}

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
        // console.log(data);
        return data; // user + ~ 옵션
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // console.log(token);
      if (user) return { ...token, ...user };
      if (token.backendToken.expiresIn > Date.now()) return token;
      return await refreshToken(token);
    },
    session({ token, session }) {
      session.user = token.user;
      session.backendToken = token.backendToken;

      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
