'use client';

import React, { ChangeEvent } from 'react';

export type EditTextProps = {
  value: string;
  onChange: (value: string) => void;
  onBlur: () => void;
  onFocus: () => void;
};

export const EditText = ({
  value,
  onChange,
  onBlur,
  onFocus,
}: EditTextProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      onBlur={onBlur}
      onFocus={onFocus}
      className="ec-text-content rounded border border-gray-300"
      autoFocus
    />
  );
};
