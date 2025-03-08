// src/types/next-auth.d.ts

import { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      role?: string;
      organizationId?: string;
    } & DefaultSession['user'];
  }
}

// Extend the User interface from next-auth
declare module 'next-auth' {
  interface User {
    role?: string;
    organizationId?: string;
  }
}

// Extend the AdapterUser interface from next-auth/adapters
declare module 'next-auth/adapters' {
  interface AdapterUser {
    role?: string;
    organizationId?: string;
  }
}
