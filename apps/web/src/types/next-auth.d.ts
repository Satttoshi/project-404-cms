import { DefaultSession } from 'next-auth';
import { DefaultUser } from 'next-auth';

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      id: string;
      role: string;
      organizationId?: string;
    } & DefaultSession['user'];
  }

  interface User extends DefaultUser {
    role?: string;
    organizationId?: string;
  }
}

/**
 * The explicit type annotation for the auth function is necessary here to address TypeScript's
 * "non-portable type" warning (TS2742). This issue occurs because the Auth.js library's internal
 * types reference paths within node_modules, making them non-portable across different
 * environments/installations.
 *
 * By explicitly typing the auth() function with `typeof authConfig.auth`, we're telling TypeScript
 * to use the type that it already has inferred, but to not generate the warning about the type
 * reference paths. This approach is safer than using @ts-ignore and maintains type safety.
 */
declare module 'next-auth/lib' {
  interface AppRouteHandlerFn {
    (req: Request): Promise<Response>;
  }
}

declare module 'next-auth/lib/types' {
  interface AppRouteHandlerFn {
    (req: Request): Promise<Response>;
  }
}
