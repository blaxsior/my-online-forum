import 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id: number;
      login_id: string;
      email: string;
      name: string;
    };
    backendToken: {
      access_token: string;
      refresh_token: string;
      expiresIn: number;
    };
  }
}

import 'next-auth/jwt';

declare module 'next-auth/jwt' {
  interface JWT {
    user: {
      id: number;
      login_id: string;
      email: string;
      name: string;
    };
    backendToken: {
      access_token: string;
      refresh_token: string;
      expiresIn: number;
    };
  }
}
