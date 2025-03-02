import React from 'react';

type TextProps = {
  value: string;
  onClick: () => void;
};

export const Text = ({ value, onClick }: TextProps) => {
  return (
    <div onClick={onClick} className="cursor-pointer">
      <h1 className="bg-avocado-500 text-8xl text-blue-500">Text Component</h1>
      <div className="p-2">{value}</div>
    </div>
  );
};
