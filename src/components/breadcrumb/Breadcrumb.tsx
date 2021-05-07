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
import styles from "./Breadcrumb.module.css";

export const Breadcrumb = (props) => {
	const separator = props.separator || <BreadcrumbSeparator />;
	const children = props.children.reduce((accumulator, item) => {
		accumulator.push(item);
		accumulator.push(separator);
		return accumulator;
	}, []);
	return <div className={cx(styles.root, props.className)}>{children}</div>;
};

export const BreadcrumbSeparator = (props) => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		className={cx(styles.separator, props.className)}
	>
		<polyline points="9 18 15 12 9 6"></polyline>
	</svg>
);
