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

// @ts-ignore
import styles from "./Badge.module.css";

export interface BadgeProps {
	className?: string;

	/**
	 * Defines the appearance of the Badge.
	 */
	appearance?: "default" | "primary" | "important";

	/**
	 * Defines the maximum value for the Badge. The
	 * default max value for a badge is 99.
	 */
	max?: number;
}

const Badge: React.FC<BadgeProps> = (props) => {
	const max = props.max || 99;
	const appearance = props.appearance || "default";
	return (
		<span
			className={cx(styles.root, props.className, {
				[styles.primary]: appearance === "primary",
				[styles.important]: appearance === "important",
			})}
		>
			{props.children}
		</span>
	);
};

export default Badge;
