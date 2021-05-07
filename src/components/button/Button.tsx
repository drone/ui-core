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

import React, { ReactNode } from "react";
import cx from "classnames";

// @ts-ignore
import styles from "./Button.module.css";

// Button renders the Button component.
export const Button = (props) => {
	return (
		<button
			disabled={props.disabled}
			onClick={props.onClick}
			className={cx(
				styles.root,
				props.rounded && styles.rounded,
				props.fitParent && styles.fill,
				props.iconBefore && styles.hasIconBefore,
				props.iconAfter && styles.hasIconAfter,
				props.className
			)}
			data-appearance={props.appearance || "default"}
			data-type={props.type || "default"}
		>
			{props.iconBefore}
			{props.children}
			{props.iconAfter}
		</button>
	);
};

export interface ButtonProps {
	/**
	 * Set the button to autofocus on mount
	 */
	autoFocus?: boolean;

	/**
	 * Add a classname to the button
	 */
	className?: string;

	/**
	 * Text content to be rendered in the button.
	 */
	children: ReactNode;

	/**
	 * Defines the appearance of the button.
	 */
	appearance?: "default" | "outline";

	/**
	 * Defines the intent of the button.
	 */
	type?: "default" | "danger" | "warning" | "success";

	/**
	 * Renders the button with rounded corners.
	 */
	rounded?: boolean;

	/**
	 * Option to fit button width to its parent width.
	 */
	fitParent?: boolean;

	/**
	 * Places an icon within the button, before the button's text.
	 */
	iconBefore?: ReactNode;

	/**
	 * Places an icon within the button, after the button's text.
	 */
	iconAfter?: ReactNode;

	/**
	 * Set if the button is disabled.
	 */
	disabled?: boolean;
}
