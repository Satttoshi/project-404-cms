import React from 'react';

export type TextProps = {
  value: string;
  onClick: () => void;
};

export const Text = ({ value, onClick }: TextProps) => {
  return (
    <div onClick={onClick} className="cursor-pointer">
      <h1 className="ec-text-heading">Text Component</h1>
      <div className="ec-text-content">{value}</div>
    </div>
  );
};
