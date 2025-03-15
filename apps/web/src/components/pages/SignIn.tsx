'use client';

import { JSX, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { signInWithGoogle } from '../../utils/sign-in-with-google';
import { signInWithEmail } from '../../utils/sign-in-with-email';

export function SignIn(): JSX.Element {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams?.get('callbackUrl') || '/';
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [isEmailLoading, setIsEmailLoading] = useState(false);

  const handleSignInWithGoogle = async () => {
    setIsLoading(true);
    try {
      await signInWithGoogle(callbackUrl);
    } catch (error) {
      console.error('Google sign in failed', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignInWithEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsEmailLoading(true);
    try {
      await signInWithEmail(email, callbackUrl);
    } catch (error) {
      console.error('Email sign in failed', error);
      setIsEmailLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="w-full max-w-md rounded-lg border border-gray-200 bg-white p-8 shadow-md">
        <h1 className="mb-6 text-center text-2xl font-bold">Sign In</h1>

        <div className="flex flex-col gap-4">
          <button
            onClick={handleSignInWithGoogle}
            disabled={isLoading || isEmailLoading}
            className="flex w-full items-center justify-center gap-2 rounded-md bg-white px-4 py-2 text-gray-700 shadow-sm ring-1 ring-gray-300 hover:bg-gray-50 focus:outline-offset-0">
            {isLoading ? (
              <span>Loading...</span>
            ) : (
              <>
                <svg className="h-5 w-5" aria-hidden="true" viewBox="0 0 24 24">
                  {'GOOGLE LOGO IN HERE'}
                </svg>
                <span>Sign in with Google</span>
              </>
            )}
          </button>

          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-2 text-sm text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

          <form onSubmit={handleSignInWithEmail} className="space-y-3">
            <div>
              <label
                htmlFor="email"
                className="mb-1 block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                placeholder="you@example.com"
                disabled={isLoading || isEmailLoading}
              />
            </div>
            <button
              type="submit"
              disabled={isLoading || isEmailLoading}
              className="flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50">
              {isEmailLoading ? 'Sending link...' : 'Sign in with Email'}
            </button>
          </form>
        </div>

        {searchParams?.get('error') && (
          <p className="mt-4 text-center text-sm text-red-500">
            Authentication failed. Please try again.
          </p>
        )}
      </div>
    </div>
  );
}
