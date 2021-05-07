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

export const Spinner = (props) => (
	<svg
		width={props.size || "32px"}
		height={props.size || "32px"}
		viewBox="0 0 38 38"
		xmlns="http://www.w3.org/2000/svg"
		stroke={props.color || "currentColor"}
		aria-label={props.label}
	>
		<g fill="none" fillRule="evenodd">
			<g transform="translate(1 1)" strokeWidth="2">
				<path d="M36 18c0-9.94-8.06-18-18-18">
					<animateTransform
						attributeName="transform"
						type="rotate"
						from="0 18 18"
						to="360 18 18"
						dur="1s"
						repeatCount="indefinite"
					/>
				</path>
			</g>
		</g>
	</svg>
);
