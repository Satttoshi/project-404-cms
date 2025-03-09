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
    debug: process.env.NODE_ENV === 'development',
    session: {
      strategy: 'jwt',
      maxAge: 30 * 24 * 60 * 60, // 30 days
      updateAge: 24 * 60 * 60, // 24 hours
      ...rest.session,
    },
    jwt: {
      maxAge: 30 * 24 * 60 * 60, // 30 days
      ...rest.jwt,
    },
    callbacks: {
      // Default JWT callback to handle user data
      jwt: ({ token, user }) => {
        if (user) {
          token.id = user.id;
          token.role = user.role || 'user';
          if (user.organizationId) {
            token.organizationId = user.organizationId;
          }
        }
        return token;
      },
      // Default session callback to sync with token
      session: ({ session, token }) => {
        if (session.user && token) {
          session.user.id = token.id as string;
          if (token.role) {
            session.user.role = token.role as string;
          }
          if (token.organizationId) {
            session.user.organizationId = token.organizationId as string;
          }
        }
        return session;
      },
      ...rest.callbacks,
    },
    pages: {
      signIn: '/auth/signin',
      ...rest.pages,
    },
  } satisfies NextAuthConfig;
}
