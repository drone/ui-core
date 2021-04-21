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
import { css, cx } from "@emotion/css";
import colors from "../shared/colors";

const rootCss = css`
	display: grid;
	grid-template-columns: 72px 250px 1fr;
	grid-template-rows: auto 1fr;
	grid-template-areas:
		"sidebar menu header"
		"sidebar menu content";

	height: 100vh;
	width: 100vw;
`;

const sidebarCss = css`
	grid-area: sidebar;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	align-items: center;
	box-sizing: border-box;
	justify-content: space-between;
	background-color: #0a3364;
	box-shadow: 3px 0 5px rgb(0 0 0 / 20%);
	z-index: 1;
`;

const menuCss = css`
	grid-area: menu;
	background: #07192b;
`;

const headerCss = css`
	grid-area: header;
`;

const contentCss = css`
	grid-area: content;
	background: #f8f9fa;
`;

// Layout renders the Layout component.
export default function Layout(props) {
	return (
		<div className={cx(rootCss, props.className)}>
			<div className={sidebarCss}>{props.sidebar}</div>
			<div className={menuCss}>{props.menu}</div>
			<div className={contentCss}>{props.children}</div>
			<div className={headerCss}>{props.header}</div>
		</div>
	);
}
