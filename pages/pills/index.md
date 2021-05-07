import { Pills, Pill, PillPanel, PillList } from "../../src/components/pills/Pills";
import Playground from "../../docs/playground";
import { useState } from "react";

# Default

The default form of pill navigation.

<Playground
  scope={{ Pills, Pill, PillPanel, PillList  }}
  code={`() => {
  return (
      <Pills default="tab1">
        <PillList>
            <Pill value="tab1">One</Pill>
            <Pill value="tab2">Two</Pill>
            <Pill value="tab3">Three</Pill>
        </PillList>
        <PillPanel value="tab1">Pill one content</PillPanel>
        <PillPanel value="tab2">Pill two content</PillPanel>
        <PillPanel value="tab3">Pill three content</PillPanel>
      </Pills>
  );
}`}
/>

The pill state managed by react state.

<Playground
  scope={{ Pills, Pill, PillPanel, PillList, useState }}
  code={`() => {
  const [ value, setValue ] = useState("tab1");
  return (
      <Pills default="tab1" value={value} onValueChange={(value) => setValue(value)}>
        <PillList>
            <Pill value="tab1">One</Pill>
            <Pill value="tab2">Two</Pill>
            <Pill value="tab3">Three</Pill>
        </PillList>
        <PillPanel value="tab1">Pill one content</PillPanel>
        <PillPanel value="tab2">Pill two content</PillPanel>
        <PillPanel value="tab3">Pill three content</PillPanel>
      </Pills>
  );
};`}
/>
