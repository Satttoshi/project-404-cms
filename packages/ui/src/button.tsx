'use client';

import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
}

export const Button = ({ children, className, appName }: ButtonProps) => {
  return (
    <div className="h-40 w-40 border bg-red-600 text-4xl text-blue-500">
      <button className="" onClick={() => alert(`Hello from your ${appName} app!`)}>
        {children}
      </button>
    </div>
  );
};
