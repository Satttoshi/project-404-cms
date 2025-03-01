import React from 'react';
import { Button } from '@repo/ui';

export default function Home(): React.ReactElement {
  return (
    <>
      <div className="bg-avocado-500 bg-blue-500 text-8xl text-red-500">LOL</div>
      <Button appName="web">Open alert</Button>
    </>
  );
}
