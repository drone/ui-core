// Copyright 2021 Harness, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// 	   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// @ts-nocheck

import React from "react";
import classnames from "classnames";
import * as RadixTabs from "@radix-ui/react-tabs";

// @ts-ignore
import styles from "./Tabs.module.css";

export const Tab = (props) => {
	return (
		<RadixTabs.Tab
			className={classnames(styles.tab, props.className)}
			value={props.value}
		>
			{props.children}
		</RadixTabs.Tab>
	);
};

export const TabList = (props) => {
	return (
		<RadixTabs.List className={classnames(styles.list, props.className)}>
			{props.children}
		</RadixTabs.List>
	);
};

export const TabPanel = (props) => {
	return (
		<RadixTabs.Panel
			className={classnames(styles.panel, props.className)}
			value={props.value}
		>
			{props.children}
		</RadixTabs.Panel>
	);
};

export const Tabs = (props) => {
	return (
		<RadixTabs.Root
			className={classnames(styles.root, props.className)}
			defaultValue={props.default}
			value={props.value}
			onValueChange={props.onValueChange}
		>
			{props.children}
		</RadixTabs.Root>
	);
};
