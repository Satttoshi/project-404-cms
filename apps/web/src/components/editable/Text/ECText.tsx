import { Editable, EditText, Text } from '@repo/ui';
import { ClientText } from './ClientText';
import React from 'react';
import { components, db } from '@repo/db';
import { eq } from 'drizzle-orm';

export const ECText = async () => {
  const isAdmin = true;

  // Fetch component with id 1
  const [component] = await db
    .select()
    .from(components)
    .where(eq(components.id, 1));

  const json = component?.content as string;

  console.log(json);

  if (isAdmin) {
    return (
      <Editable
        initialValue={json}
        editComponent={EditText}
        displayComponent={ClientText}
      />
    );
  }

  return <Text value="Hello world" />;
};
