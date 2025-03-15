// apps/web/src/app/auth/verify/page.tsx

import { ReactNode } from 'react';

export default function VerifyPage(): ReactNode {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-md">
        <h1 className="mb-2 text-2xl font-bold text-gray-900">
          Check your email
        </h1>
        <p className="mb-4 text-gray-600">
          We've sent you a magic link. Please check your email and click the
          link to sign in.
        </p>
        <p className="text-sm text-gray-500">
          If you don't see the email, check your spam folder. The link will
          expire in 24 hours.
        </p>
      </div>
    </div>
  );
}
