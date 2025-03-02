import React from 'react';
import { Button, Editable } from '@repo/ui';
import { ClientEditText, ClientText } from '../components/ClientText';

export default function Home(): React.ReactElement {
  return (
    <>
      <div className="bg-avocado-500 bg-blue-500 text-8xl text-red-500">
        LOL
      </div>
      <Button>Open alert</Button>
      <Editable
        initialValue={'Hi you can change my Text'}
        editComponent={ClientEditText}
        displayComponent={ClientText}
      />
    </>
  );
}
