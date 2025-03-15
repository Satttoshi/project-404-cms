// apps/web/src/utils/sign-in-with-email.ts

'use server';

import { signIn } from './auth';
import { redirect } from 'next/navigation';

/**
 * Server action to initiate sign in with email (magic link)
 * @param email - User's email address
 * @param callbackUrl - URL to redirect to after successful authentication
 */
export async function signInWithEmail(
  email: string,
  callbackUrl: string = '/',
) {
  await signIn('nodemailer', { email, redirectTo: callbackUrl });
  // Note: The actual redirect will happen after email verification
  // This redirect is just for the "Check your email" page
  redirect('/auth/verify');
}
