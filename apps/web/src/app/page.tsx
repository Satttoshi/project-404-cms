import React from "react";

import { Button } from "@repo/ui/button";

export default function Home(): React.ReactElement {
  return (
    <>
      <div className="text-4xl text-red bg-secondary">LOL</div>
      <Button appName="web">Open alert</Button>
    </>
  );
}
