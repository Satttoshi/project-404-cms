import { Editable, EditText, Text } from '@repo/ui';
import { ClientText } from './ClientText';
import React from 'react';

export const ECText = () => {
  const isAdmin = true;

  if (isAdmin) {
    return (
      <Editable
        initialValue="Hello world"
        editComponent={EditText}
        displayComponent={ClientText}
      />
    );
  }

  return <Text value="Hello world" />;
};
