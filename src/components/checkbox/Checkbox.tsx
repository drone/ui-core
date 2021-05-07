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
import cx from "classnames";
import Checkmark from "../../assets/icons/Checkmark";
import * as RadixCheckbox from "@radix-ui/react-checkbox";

// @ts-ignore
import styles from "./Checkbox.module.css";

export interface CheckboxProps {
	className?: string;
	onCheckedChange?: any;
	checked?: boolean;
	disabled?: boolean;
	ref?: any;
}

export const Checkbox = React.forwardRef((props, ref) => (
	<RadixCheckbox.Root
		className={cx(styles.root, props.className)}
		onCheckedChange={props.onCheckedChange}
		disabled={props.disabled}
		checked={props.checked}
		ref={ref}
	>
		<RadixCheckbox.Indicator as={Checkmark} />
	</RadixCheckbox.Root>
));
