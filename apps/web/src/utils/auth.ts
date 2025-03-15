// apps/web/src/utils/auth.ts

import {
  setupAuth,
  createGoogleProvider,
  createDrizzleAdapter,
} from '@repo/auth';
import { db } from '@repo/db';
import { createNodemailerProvider } from '@repo/auth/src/providers/nodemailer';

const authConfig = setupAuth({
  adapter: createDrizzleAdapter(db),
  providers: [createGoogleProvider(), createNodemailerProvider()],
  session: {
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
  },
});

export const handlers = authConfig.handlers;
export const auth: typeof authConfig.auth = authConfig.auth;
export const signIn = authConfig.signIn;
export const signOut = authConfig.signOut;

// Also export the whole object for convenience
export default authConfig;
