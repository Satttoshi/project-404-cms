// apps/web/src/utils/auth.ts

import {
  setupAuth,
  createGoogleProvider,
  createDrizzleAdapter,
  NextAuthResult,
} from '@repo/auth';
import { db } from '@repo/db';

const authConfig: NextAuthResult = setupAuth({
  adapter: createDrizzleAdapter(db),
  providers: [createGoogleProvider()],
  debug: process.env.NODE_ENV === 'development',
  callbacks: {
    session: ({ session, user }) => {
      if (session?.user) {
        session.user.id = user.id;
        session.user.role = user.role;
        // Add any other user properties we need in the session
        session.user.organizationId = user.organizationId;
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
