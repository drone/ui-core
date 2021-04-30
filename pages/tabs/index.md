import Tabs, { Tab, TabPanel, TabList } from "../../src/components/tabs";
import Pills, { Pill, PillPanel, PillList } from "../../src/components/pills";
import Playground from "../../docs/playground";
import { useState } from "react";

# Tabs

The default form of tabs.

<Playground
  scope={{ Tabs, Tab, TabPanel, TabList  }}
  code={`() => {
  return (
      <Tabs default="tab1">
        <TabList>
            <Tab value="tab1">One</Tab>
            <Tab value="tab2">Two</Tab>
            <Tab value="tab3">Three</Tab>
        </TabList>
        <TabPanel value="tab1">Tab one content</TabPanel>
        <TabPanel value="tab2">Tab two content</TabPanel>
        <TabPanel value="tab3">Tab three content</TabPanel>
      </Tabs>
  );
}`}
/>

The tab state managed by react state.

<Playground
  scope={{ Tabs, Tab, TabPanel, TabList, useState }}
  code={`() => {
  const [ value, setValue ] = useState("tab1");
  return (
      <Tabs default="tab1" value={value} onValueChange={(value) => setValue(value)}>
        <TabList>
            <Tab value="tab1">One</Tab>
            <Tab value="tab2">Two</Tab>
            <Tab value="tab3">Three</Tab>
        </TabList>
        <TabPanel value="tab1">Tab one content</TabPanel>
        <TabPanel value="tab2">Tab two content</TabPanel>
        <TabPanel value="tab3">Tab three content</TabPanel>
      </Tabs>
  );
};`}
/>

# Pills

The tabs component can also be displayed as pills.

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