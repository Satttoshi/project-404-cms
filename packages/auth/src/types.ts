// packages/auth/src/types.ts

import type { NextAuthConfig } from 'next-auth';
import type { JWT } from 'next-auth/jwt';
import type { Adapter } from 'next-auth/adapters';

// Extend the JWT type to include custom fields
declare module 'next-auth/jwt' {
  interface JWT {
    id?: string;
    role?: string;
    organizationId?: string;
  }
}

// Extend the Session User type to include our custom fields
declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      role?: string;
      organizationId?: string;
    };
  }

  interface User {
    id?: string;
    role?: string;
    organizationId?: string;
    [key: string]: any;
  }
}

export interface AuthConfig extends Omit<Partial<NextAuthConfig>, 'providers'> {
  /**
   * Database adapter for Auth.js
   */
  adapter?: Adapter;

  /**
   * Secret used to encrypt the NextAuth.js JWT, and to hash email verification tokens.
   * @default process.env.AUTH_SECRET
   */
  secret?: string;

  /**
   * Configure one or more authentication providers
   */
  providers?: NextAuthConfig['providers'];
}
