import React from 'react';

export const Text = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1 className="bg-avocado-500 text-8xl text-blue-500">Text Component</h1>
      {children}
    </div>
  );
};
