// src/setup.ts

import NextAuth from 'next-auth';
import type { NextAuthResult } from 'next-auth';
import { createAuthConfig } from './auth-config';
import type { AuthConfig } from './types';

/**
 * Sets up Auth.js for a Next.js app with the provided configuration
 * @param config - Auth.js configuration
 * @returns Auth.js handlers, auth, signIn, and signOut functions
 */
export function setupAuth(config: AuthConfig = {}): NextAuthResult {
  const authConfig = createAuthConfig(config);
  return NextAuth(authConfig);
}
