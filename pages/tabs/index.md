import { Tabs, Tab, TabPanel, TabList } from "../../src/components/tabs/Tabs";
import Playground from "../../docs/playground";
import { useState } from "react";

# Default

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
