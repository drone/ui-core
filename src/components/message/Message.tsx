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
import { Info, Warn, Success, Danger } from "./icons";

// @ts-ignore
import styles from "./Message.module.css";

// Renders the Message component.
export const Message = (props) => {
	const type = props.type || "info";
	const icon = props.icon || iconLookup(type);
	return (
		<>
			<div
				className={cx(styles.root, props.className)}
				data-type={type}
				role="alert"
			>
				<div className={styles.gutter}>
					<div className={styles.icon}>{icon}</div>
				</div>
				<div className={styles.content}>{props.children}</div>
			</div>
		</>
	);
};

// helper function returns the icon by type.
function iconLookup(name: string) {
	switch (name) {
		case "info":
			return <Info />;
		case "success":
			return <Success />;
		case "warning":
		case "warn":
			return <Warn />;
		case "danger":
		case "error":
		case "alert":
		default:
			return <Danger />;
	}
}
