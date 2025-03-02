'use client';

import React, { ChangeEvent } from 'react';

type EditTextProps = {
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
    <div>
      <h1 className="bg-avocado-500 text-8xl text-blue-500">Text Component</h1>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        onBlur={onBlur}
        onFocus={onFocus}
        className="w-full rounded border border-gray-300 p-2"
        autoFocus
      />
    </div>
  );
};
