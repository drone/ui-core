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

import React, { useState } from "react";
import cx from "classnames";
import Logo from "../assets/logos/Harness";
import Menu from "../assets/icons/Menu";

// @ts-ignore
import styles from "./Shell.module.css";

// Shell returns the Application shell with the global
// navigation and the sidebar.
export const ShellLayout = (props) => {
	const [expanded, setExpanded] = useState(false);
	const handleExpand = () => {
		setExpanded(!expanded);
	};
	const logo = props.logo || <Logo />;
	return (
		<div className={cx(styles.root, props.className)}>
			<div className={styles.navbar}>
				<button className={styles.expand} onClick={handleExpand}>
					<Menu />
				</button>
				<button className={styles.logo} onClick={props.onLogo}>
					{logo}
				</button>
				{props.navbar}
			</div>
			<div className={cx(styles.drawer, { [styles.drawerExpanded]: expanded })}>
				{props.drawer}
			</div>
			<div className={styles.content}>{props.children}</div>
			<div className={styles.sidebar}>{props.sidebar}</div>
		</div>
	);
};
