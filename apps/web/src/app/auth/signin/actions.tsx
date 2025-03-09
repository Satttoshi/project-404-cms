// src/app/auth/signin/actions.tsx

'use server';

import { signIn } from '../../../utils/auth';
import { redirect } from 'next/navigation';

export async function signInWithGoogle(callbackUrl: string = '/') {
  await signIn('google', { redirectTo: callbackUrl });
  redirect(callbackUrl);
}
