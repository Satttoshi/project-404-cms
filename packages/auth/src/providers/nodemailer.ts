// src/providers/nodemailer.ts
import nodemailerProvider from 'next-auth/providers/nodemailer';

/**
 * Configures Nodemailer provider for email authentication
 * @returns Nodemailer provider configured with environment variables
 */
export function createNodemailerProvider() {
  return nodemailerProvider({
    server: {
      host: process.env.EMAIL_SERVER_HOST,
      port: Number(process.env.EMAIL_SERVER_PORT),
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
      secure: true, // Use SSL for port 465
    },
    from: process.env.EMAIL_FROM,
  });
}
