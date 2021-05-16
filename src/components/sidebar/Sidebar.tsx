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

import Logo from "../../assets/logos/Harness";
import Menu from "../../assets/icons/Menu";

// @ts-ignore
import styles from "./Sidebar.module.css";

export const SideBar = (props) => {
	return (
		<div
			className={cx(
				styles.root,
				props.expandable && styles.expandable,
				props.className
			)}
		>
			<div className={styles.expander}>
				<button onClick={props.onExpand}>
					<Menu />
				</button>
			</div>
			<div className={cx(styles.logo, props.logoSelected && styles.selected)}>
				<button onClick={props.onLogo}>{props.logo || <Logo />}</button>
			</div>
			<div className={styles.content}>{props.children}</div>
			<div
				className={cx(styles.avatar, props.avatarSelected && styles.selected)}
			>
				<button onClick={props.onAvatar}>{props.avatar}</button>
			</div>
		</div>
	);
};
