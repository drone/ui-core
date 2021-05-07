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
import { Button } from "../button/Button";
import Icon from "../../assets/icons/ChevronDown";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

// @ts-ignore
import styles from "./Menu.module.css";

export const MenuItem = (props) => {
	return (
		<DropdownMenu.Item className={styles.item} onSelect={props.onSelect}>
			{props.children}
		</DropdownMenu.Item>
	);
};

export const Menu = (props) => {
	return (
		<DropdownMenu.Root className={styles.root}>
			<DropdownMenu.Trigger className={styles.trigger}>
				{props.button || (
					<Button iconAfter={<Icon className={styles.chevron} />}>
						{props.trigger}
					</Button>
				)}
			</DropdownMenu.Trigger>
			<DropdownMenu.Content className={styles.content}>
				{props.children}
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	);
};
