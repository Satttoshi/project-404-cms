import React from 'react';

export type TextProps = {
  value: string;
};

export const Text = ({ value }: TextProps) => {
  return <div className="ec-text-content">{value}</div>;
};
