// src/providers/google.ts

import GoogleProvider from 'next-auth/providers/google';
import type { OAuthUserConfig } from 'next-auth/providers';

/**
 * Google OAuth provider for Auth.js
 * @param options - Options for the Google provider
 * @returns Google provider configured with environment variables or provided options
 */
export function createGoogleProvider(options?: Partial<OAuthUserConfig<any>>) {
  const clientId = options?.clientId || process.env.AUTH_GOOGLE_ID;
  const clientSecret = options?.clientSecret || process.env.AUTH_GOOGLE_SECRET;

  if (!clientId || !clientSecret) {
    throw new Error(
      'Missing Google OAuth credentials. Please define AUTH_GOOGLE_ID and AUTH_GOOGLE_SECRET environment variables.',
    );
  }

  return GoogleProvider({
    clientId,
    clientSecret,
    authorization: {
      params: {
        prompt: 'consent',
        access_type: 'offline',
        response_type: 'code',
        ...options?.authorization?.params,
      },
    },
    ...options,
  });
}
