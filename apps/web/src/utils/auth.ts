// apps/web/src/utils/auth.ts

import {
  setupAuth,
  createGoogleProvider,
  createDrizzleAdapter,
} from '@repo/auth';
import { db } from '@repo/db';

const authConfig = setupAuth({
  adapter: createDrizzleAdapter(db),
  providers: [createGoogleProvider()],
  debug: process.env.NODE_ENV === 'development',
  session: {
    strategy: 'jwt', // Explicitly set JWT strategy
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    // Make sure user exists before trying to access properties
    jwt: ({ token, user }) => {
      if (user) {
        // Only try to access user.id if user exists
        token.id = user.id;
        token.role = user.role || 'user';
        token.organizationId = user.organizationId;
      }
      return token;
    },
    // Use token data to build the session
    session: ({ session, token }) => {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as string;
        session.user.organizationId = token.organizationId as string;
      }
      return session;
    },
  },
});

export const handlers = authConfig.handlers;
export const auth: typeof authConfig.auth = authConfig.auth;
export const signIn = authConfig.signIn;
export const signOut = authConfig.signOut;

// Also export the whole object for convenience
export default authConfig;
