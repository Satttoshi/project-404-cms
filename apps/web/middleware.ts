// apps/web/middleware.ts

import { auth } from './src/utils/auth';

export default auth;

export const config = {
  matcher: [
    // This regex pattern excludes:
    // api routes, static files, images, favicon, and public files
    '/((?!api|_next/static|_next/image|favicon.ico|public).*)',
  ],
};
