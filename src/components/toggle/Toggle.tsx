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
import * as ToggleGroup from "@radix-ui/react-toggle-group";

// @ts-ignore
import styles from "./Toggle.module.css";

export const ToggleItem = (props) => {
	const handleClick = (event) => {
		// this hack prevent a selected item from
		// being unselected, which effective enforces
		// an item to always be selected.
		if (event.target.ariaPressed === "true") {
			event.preventDefault();
			event.stopPropagation();
			return;
		}
	};
	return (
		<ToggleGroup.Item
			onClick={handleClick}
			className={styles.item}
			value={props.text}
		>
			{props.text}
		</ToggleGroup.Item>
	);
};

export default (props) => {
	return (
		<ToggleGroup.Root
			className={styles.group}
			type="single"
			defaultValue={props.defaultValue}
			value={props.value}
			onValueChange={props.onValueChange}
		>
			{props.children}
		</ToggleGroup.Root>
	);
};
