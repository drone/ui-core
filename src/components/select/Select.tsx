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

// @ts-ignore
import styles from "./Select.module.css";

export const Select = React.forwardRef((props, ref) => (
	<select
		ref={ref}
		onClick={props.onClick}
		onChange={props.onChange}
		onMouseEnter={props.onMouseEnter}
		onMouseLeave={props.onMouseLeave}
		disabled={props.disabled}
		style={{ width: props.width || "100%" }}
		className={cx(styles.root, props.className)}
	>
		{props.children}
	</select>
));
