// src/app/auth/signin/page.tsx

import { ReactNode, Suspense } from 'react';
import { SignIn } from '../../../components/pages/SignIn';

export default function SignInPage(): ReactNode {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SignIn />
    </Suspense>
  );
}
