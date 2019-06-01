import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "../../src/components/button/module";

storiesOf("Elements/Button", module).add(
  "Button",
  () => (
    <div>
      <div style={{ padding: 20 }}>
        <Button size="tiny">Test</Button>
        <Button size="small" disable>
          Test
        </Button>
        <Button loading>Test</Button>
        <Button size="large">Test</Button>
      </div>
      <div style={{ padding: 20 }}>
        <Button inverse size="tiny">
          Test
        </Button>
        <Button inverse disable size="small">
          Test
        </Button>
        <Button inverse loading>
          Test
        </Button>
        <Button inverse size="large">
          Test
        </Button>
      </div>
    </div>
  ),
  {
    notes: "Button Tampan"
  }
);
