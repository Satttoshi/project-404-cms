import { JSX } from 'react';
import { Button } from '@repo/ui';
import { ECText } from '../components/editable/Text';
import { auth } from '../utils/auth';
import Link from 'next/link';

export default async function Home(): Promise<JSX.Element> {
  const session = await auth();

  return (
    <>
      <div className="bg-avocado-500 bg-blue-500 text-8xl text-red-500">
        LOL
      </div>
      <Button>Open alert</Button>
      <ECText />

      <div className="mb-8 text-center text-lg">
        {session ? (
          <p>
            You are signed in as{' '}
            <span className="font-medium">
              {session.user.name || session.user.email}
            </span>
          </p>
        ) : (
          <p>You are not signed in</p>
        )}
      </div>

      <div className="flex gap-4">
        {session ? (
          <Link
            href="/dashboard"
            className="rounded-md bg-blue-600 px-6 py-2 text-white hover:bg-blue-700">
            Go to Dashboard
          </Link>
        ) : (
          <Link
            href="/auth/signin"
            className="rounded-md bg-blue-600 px-6 py-2 text-white hover:bg-blue-700">
            Sign In
          </Link>
        )}
      </div>
    </>
  );
}
