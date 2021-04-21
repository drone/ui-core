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
	grid-template-columns: 600px 1fr;
	grid-template-rows: 1fr;
	height: 100vh;
	width: 100vw;
	background: #ffffff;

	@media only screen and (max-width: 800px) {
		position: normal;
		grid-template-columns: 1fr;
	}
`;

const contentCss = css`
	padding: 100px;
	box-sizing: border-box;
	background: #ffffff;

	@media only screen and (max-width: 800px) {
		padding: 40px;
		padding-top: 100px;
	}
`;

const splashCss = css`
	background-color: #0a3364;
	background-image: url("/welcome.svg");
	background-size: 900px;

	@media only screen and (max-width: 800px) {
		display: none;
	}
`;

export const Splash = (props) => (
	<div className={splashCss}>{props.splash}</div>
);

// Login returns the Login page layout with the login
// form left-aligned and the splash screen taking up
// the main body of the page.
export default (props) => {
	return (
		<>
			<div className={cx(rootCss, props.className)}>
				<div className={contentCss}>{props.children}</div>
				{props.splash}
			</div>
		</>
	);
};
