// src/index.ts

// Import and re-export from next-auth
import NextAuth from 'next-auth';

// Export auth config creator
export { createAuthConfig } from './auth-config';
export { setupAuth } from './setup';

// Export provider creators
export { createGoogleProvider } from './providers/google';
export { createCredentialsProvider } from './providers/credentials';

// Export adapter creator
export { createDrizzleAdapter } from './adapters/drizzle';

// Export types
export type { AuthConfig } from './types';
export type { NextAuthResult } from 'next-auth';

// Re-export the next-auth default export
export default NextAuth;
