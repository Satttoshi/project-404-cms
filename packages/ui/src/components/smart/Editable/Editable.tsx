'use client';

import React, { useState, useEffect, ComponentType } from 'react';

type EditComponentProps = {
  value: string;
  onChange: (value: string) => void;
  onBlur: () => void;
  onFocus: () => void;
};

type DisplayComponentProps = {
  value: string;
  onClick: () => void;
};

type EditableContentProps = {
  initialValue: string;
  onSave?: (value: string) => void;
  editComponent: ComponentType<EditComponentProps>;
  displayComponent: ComponentType<DisplayComponentProps>;
};

export const Editable = ({
  initialValue,
  onSave,
  editComponent: EditComponent,
  displayComponent: DisplayComponent,
}: EditableContentProps) => {
  const [value, setValue] = useState(initialValue);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  const handleChange = (newValue: string) => {
    setValue(newValue);
  };

  const handleBlur = () => {
    setIsEditing(false);

    // Call external onSave if provided from Parent Component
    if (onSave) {
      onSave(value);
    }
  };

  const handleFocus = () => {
    // Any focus handling logic here
  };

  const handleDisplayClick = () => {
    setIsEditing(true);
  };

  return (
    <div>
      {isEditing ? (
        <EditComponent
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
        />
      ) : (
        <DisplayComponent value={value} onClick={handleDisplayClick} />
      )}
    </div>
  );
};
