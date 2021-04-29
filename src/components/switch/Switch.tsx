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

import React from "react";
import cx from "classnames";
import * as RadixSwitch from "@radix-ui/react-switch";

// @ts-ignore
import styles from "./Switch.module.css";

const Switch: React.FC<SwitchProps> = (props) => (
	<RadixSwitch.Root
		className={cx(styles.root, props.className)}
		onCheckedChange={props.onCheckedChange}
		checked={props.checked}
		disabled={props.disabled}
	>
		<RadixSwitch.Thumb className={styles.thumb} />
	</RadixSwitch.Root>
);

export interface SwitchProps {
	className?: string;
	onCheckedChange?: any;
	checked?: boolean;
	disabled?: boolean;
}

export default Switch;