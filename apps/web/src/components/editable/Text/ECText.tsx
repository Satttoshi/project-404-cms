import { Editable, EditText, Text } from '@repo/ui';
import { ClientText } from './ClientText';
import React from 'react';
import { getComponentById } from '@repo/db';

export const ECText = async () => {
  const isAdmin = true;

  const component = await getComponentById(1);
  const textValue = component?.content?.value;

  if (!textValue) return null;

  if (isAdmin) {
    return (
      <Editable
        initialValue={textValue}
        editComponent={EditText}
        displayComponent={ClientText}
      />
    );
  }

  return <Text value="Hello world" />;
};
