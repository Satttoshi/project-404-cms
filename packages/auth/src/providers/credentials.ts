// src/providers/credentials.ts

import CredentialsProvider from 'next-auth/providers/credentials';
import type { CredentialsConfig } from 'next-auth/providers';

/**
 * Credentials provider for Auth.js
 * @param options - Options for the Credentials provider
 * @returns Credentials provider configured with provided options
 */
export function createCredentialsProvider(options: CredentialsConfig) {
  return CredentialsProvider(options);
}
