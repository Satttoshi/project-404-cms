"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
}

export const Button = ({ children, className, appName }: ButtonProps) => {
  return (
    <div className="bg-red h-40 w-40">
      <button
        className="bg-red text-blue text-8xl"
        onClick={() => alert(`Hello from your ${appName} app!`)}
      >
        {children}
      </button>
    </div>
  );
};
