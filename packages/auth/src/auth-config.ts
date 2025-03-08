// src/auth-config.ts

import type { NextAuthConfig } from 'next-auth';
import { AuthConfig } from './types';

/**
 * Creates an Auth.js configuration with sensible defaults
 */
export function createAuthConfig(config: AuthConfig = {}): NextAuthConfig {
  const { secret = process.env.AUTH_SECRET, providers = [], ...rest } = config;

  if (!secret) {
    throw new Error('No AUTH_SECRET provided for authentication');
  }

  return {
    secret,
    providers,
    ...rest,
    debug: process.env.NODE_ENV === 'development',
    session: {
      strategy: 'jwt',
      ...rest.session,
    },
    pages: {
      signIn: '/auth/signin',
      ...rest.pages,
    },
  } satisfies NextAuthConfig;
}
