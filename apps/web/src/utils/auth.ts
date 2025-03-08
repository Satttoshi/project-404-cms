// apps/web/src/utils/auth.ts

import {
  setupAuth,
  createGoogleProvider,
  createDrizzleAdapter,
} from '@repo/auth';
import { db } from '@repo/db';

export const auth = setupAuth({
  adapter: createDrizzleAdapter(db),
  providers: [createGoogleProvider()],
  callbacks: {
    session: ({ session, user }) => {
      if (session?.user) {
        session.user.id = user.id;
        session.user.role = user.role;
        // Add any other custom user properties we need in the session
        session.user.organizationId = user.organizationId;
      }
      return session;
    },
  },
});

// Extract the individual components for easier imports
export const { handlers, signIn, signOut } = auth;
