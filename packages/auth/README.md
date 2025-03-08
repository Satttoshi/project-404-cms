# @repo/auth

A shared authentication package for Next.js applications in the monorepo. Built on top of Auth.js/NextAuth.

## Installation

The package is available as a workspace dependency:

```bash
pnpm add @repo/auth
```

## Usage

### Basic Setup

Create an auth.ts file at the root of your Next.js app:

```typescript
// auth.ts
import { setupAuth, createGoogleProvider } from "@repo/auth";

export const { handlers, auth, signIn, signOut } = setupAuth({
  providers: [
    createGoogleProvider(),
  ],
});
```

### Route Handler Setup

Create a route handler in your Next.js app:

```typescript
// app/api/auth/[...nextauth]/route.ts
import { handlers } from "@/auth";

export const { GET, POST } = handlers;
```

### With Drizzle Database

```typescript
// auth.ts
import { setupAuth, createGoogleProvider, createDrizzleAdapter } from "@repo/auth";
import { db } from "@repo/db";

export const { handlers, auth, signIn, signOut } = setupAuth({
  adapter: createDrizzleAdapter(db),
  providers: [
    createGoogleProvider(),
  ],
});
```

### Using Middleware

```typescript
// middleware.ts
export { auth as middleware } from "@/auth";

// Optional: Configure middleware to only run on specific paths
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
```

### Adding Custom Session Data

You can extend the session with custom data from your user:

```typescript
// auth.ts
export const { handlers, auth, signIn, signOut } = setupAuth({
  adapter: createDrizzleAdapter(db),
  providers: [
    createGoogleProvider(),
  ],
  callbacks: {
    async session({ session, user }) {
      if (session.user && user) {
        session.user.id = user.id;
        session.user.role = user.role;
        session.user.organizationId = user.organizationId;
      }
      return session;
    },
  },
});
```

### Protecting Routes

You can protect routes by adding an `authorized` callback:

```typescript
// auth.ts
export const { handlers, auth, signIn, signOut } = setupAuth({
  // ... other config
  callbacks: {
    async authorized({ auth, request }) {
      const { pathname } = request.nextUrl;

      // Protect admin routes
      if (pathname.startsWith('/admin')) {
        return auth?.user?.role === 'admin';
      }

      // Protect organization routes
      if (pathname.startsWith('/org')) {
        return !!auth?.user;
      }

      // Allow public routes
      return true;
    },
  },
});
```

## Environment Variables

This package uses the following environment variables:
- `AUTH_SECRET` - A secret key used to encrypt cookies and tokens.
- `AUTH_GOOGLE_ID` - Google OAuth client ID (if using Google provider).
- `AUTH_GOOGLE_SECRET` - Google OAuth client secret (if using Google provider).

You can generate a secret key using the following command:

```bash
npx auth secret
```

## Available Providers

- `createGoogleProvider` - Google OAuth provider.
- `createCredentialsProvider` - Email and password provider.

## Database Adapters

- `createDrizzleAdapter` - Adapter for Drizzle database with PostgreSQL.

## TypeScript Declaration

To enhance TypeScript support, you can add declarations for the session user:

```typescript
// types/next-auth.d.ts
import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: string;
      organizationId?: string;
    } & DefaultSession["user"];
  }

  interface User {
    role: string;
    organizationId?: string;
  }
}
```

## Auth.js Database Schema for PostgreSQL

The following database schema is required for Auth.js to work with PostgreSQL. 
This [schema](../db/src/schema/index.ts) is already defined in the `@repo/db` package.

### Users Table

```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT,
  email TEXT NOT NULL UNIQUE,
  email_verified TIMESTAMP WITH TIME ZONE,
  image TEXT,
  role TEXT DEFAULT 'user',
  organization_id UUID,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### Account Table

```sql
CREATE TABLE accounts (
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  type TEXT NOT NULL,
  provider TEXT NOT NULL,
  provider_account_id TEXT NOT NULL,
  refresh_token TEXT,
  access_token TEXT,
  expires_at INTEGER,
  token_type TEXT,
  scope TEXT,
  id_token TEXT,
  session_state TEXT,
  PRIMARY KEY (provider, provider_account_id)
);
```

### Sessions Table

```sql
CREATE TABLE sessions (
  session_token TEXT PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  expires TIMESTAMP WITH TIME ZONE NOT NULL
);
```

### Verification Requests Table

```sql
CREATE TABLE verification_tokens (
  identifier TEXT NOT NULL,
  token TEXT NOT NULL,
  expires TIMESTAMP WITH TIME ZONE NOT NULL,
  PRIMARY KEY (identifier, token)
);
```

### Step 6: Create an Example Next.js Implementation

Let's create an example file showing how to use your package in a Next.js app:

```typescript
// src/examples/next-auth-setup.ts

/**
 * Example: How to set up Auth.js in a Next.js app
 * 
 * This file shows how to use the @repo/auth package in a Next.js app.
 * Create this file as `auth.ts` in the root of your Next.js app.
 */

import { setupAuth, createGoogleProvider, createDrizzleAdapter } from "@repo/auth";
import { db } from "@repo/db";

export const { handlers, auth, signIn, signOut } = setupAuth({
  adapter: createDrizzleAdapter(db),
  providers: [
    createGoogleProvider(),
  ],
  callbacks: {
    // Add custom callbacks here
    async session({ session, user }) {
      // Add user's role to the session
      if (session.user && user.role) {
        session.user.role = user.role;
      }
      return session;
    },
    // Add authorization check
    async authorized({ auth, request }) {
      // Get the pathname
      const { pathname } = request.nextUrl;
      
      // Protect routes that start with /admin
      if (pathname.startsWith('/admin')) {
        // Only allow admin users
        return auth?.user?.role === 'admin';
      }
      
      // Allow all other routes
      return true;
    },
  },
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
  },
});
```
