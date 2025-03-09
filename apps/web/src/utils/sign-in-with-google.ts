'use server';

import { redirect } from 'next/navigation';
import { signIn } from './auth';

export async function signInWithGoogle(callbackUrl: string = '/') {
  await signIn('google', { redirectTo: callbackUrl });
  redirect(callbackUrl);
}
