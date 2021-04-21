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
import { css, cx } from "@emotion/css";
import colors from "../shared/colors";
import Logo from "../assets/logos/Harness";
import Close from "../assets/icons/Close";
import Menu from "../assets/icons/Menu";

const rootCss = css`
	display: grid;
	grid-template-columns: 64px 250px 1fr 64px;
	grid-template-areas: "navbar drawer content sidebar";

	height: 100vh;
	width: 100vw;

	@media only screen and (max-width: 800px) {
		display: block;
	}
`;

const logoCss = css`
	appearance: none;
	background: none;
	border: none;
	border-radius: none;
	box-shadow: none;
	box-sizing: border-box;
	cursor: pointer;
	outline: none;
	margin: 0px;
	padding: 0px;
	min-height: 32px;

	svg {
		width: 32px;
		height: 32px;
	}
`;

const navbarCss = css`
	grid-area: navbar;

	background-color: #0a3364;
	box-shadow: 3px 0 5px rgb(0 0 0 / 20%);
	box-sizing: border-box;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 0px 32px 1fr;
	padding: 22px 0;
	z-index: 1;

	@media only screen and (max-width: 800px) {
		padding: 0px 22px;
		height: 64px;
		grid-template-rows: 1fr;
		grid-template-columns: 32px 32px 1fr;
		grid-gap: 20px;
	}
`;

const drawerCss = css`
	grid-area: drawer;
	background: #07192b;
	@media only screen and (max-width: 800px) {
		display: none;
	}
`;

const drawerExpandedCss = css`
	@media only screen and (max-width: 800px) {
		display: block;
	}
`;

const contentCss = css`
	grid-area: content;
`;

const sidebarCss = css`
	grid-area: sidebar;

	background: ${colors.gray50};
	border-left: 1px solid rgba(0, 0, 0, 0.1);
	padding: 22px 0;

	@media only screen and (max-width: 800px) {
		display: none;
	}
`;

const expandCss = css`
	appearance: none;
	background: none;
	border: none;
	border-radius: none;
	box-shadow: none;
	box-sizing: border-box;
	cursor: pointer;
	display: none;
	outline: none;
	margin: 0px;
	padding: 0px;
	min-height: 32px;

	svg {
		width: 32px;
		height: 32px;
		color: #fff;
	}

	@media only screen and (max-width: 800px) {
		display: block;
	}
`;

// Shell returns the Application shell with the global
// navigation and the sidebar.
export default (props) => {
	const [expanded, setExpanded] = useState(false);
	const handleExpand = () => {
		setExpanded(!expanded);
	};
	const logo = props.logo || <Logo />;
	return (
		<div className={cx(rootCss, props.className)}>
			<div className={navbarCss}>
				<button className={expandCss} onClick={handleExpand}>
					{expanded === true ? <Close /> : <Menu />}
				</button>
				<button className={logoCss} onClick={props.onLogo}>
					{logo}
				</button>
				{props.navbar}
			</div>
			<div className={cx(drawerCss, { [drawerExpandedCss]: expanded })}>
				{props.drawer}
			</div>
			<div className={contentCss}>{props.children}</div>
			<div className={sidebarCss}>{props.sidebar}</div>
		</div>
	);
};
