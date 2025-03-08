// src/types.ts

import type { NextAuthConfig } from 'next-auth';
import type { Adapter } from 'next-auth/adapters';

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
