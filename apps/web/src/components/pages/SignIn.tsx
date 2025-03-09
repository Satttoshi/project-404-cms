'use client';

import { JSX, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { signInWithGoogle } from '../../utils/sign-in-with-google';

export function SignIn(): JSX.Element {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams?.get('callbackUrl') || '/';
  const [isLoading, setIsLoading] = useState(false);

  const handleSignInWithGoogle = async () => {
    setIsLoading(true);
    try {
      await signInWithGoogle(callbackUrl);
    } catch (error) {
      console.error('Sign in failed', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="w-full max-w-md rounded-lg border border-gray-200 bg-white p-8 shadow-md">
        <h1 className="mb-6 text-center text-2xl font-bold">Sign In</h1>

        <div className="flex flex-col gap-4">
          <button
            onClick={handleSignInWithGoogle}
            disabled={isLoading}
            className="flex w-full items-center justify-center gap-2 rounded-md bg-white px-4 py-2 text-gray-700 shadow-sm ring-1 ring-gray-300 hover:bg-gray-50 focus:outline-offset-0">
            {isLoading ? (
              <span>Loading...</span>
            ) : (
              <>
                <svg className="h-5 w-5" aria-hidden="true" viewBox="0 0 24 24">
                  {/* SVG paths */}
                </svg>
                <span>Sign in with Google</span>
              </>
            )}
          </button>
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
