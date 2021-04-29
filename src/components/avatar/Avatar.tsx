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
import * as RadixAvatar from "@radix-ui/react-avatar";

// @ts-ignore
import styles from "./Avatar.module.css";

export enum AvatarSize {
	tiny = "16px",
	small = "24px",
	medium = "32px",
	large = "48px",
	xlarge = "72px",
	xxlarge = "128px",
}

export interface AvatarProps {
	className?: string;

	/**
	 * A url to load an image from.
	 */
	src?: string;

	/**
	 * Alt will be displayed in a tooltip and used as fallback
	 * content if the image fails to load.
	 */
	alt?: string;

	/**
	 * Defines the size of the avatar.
	 */
	size?: string | AvatarSize;

	/**
	 * Defines the appearance of the avatar.
	 */
	appearance?: "circle" | "square";
}

const Avatar: React.FC<AvatarProps> = (props) => (
	<RadixAvatar.Root
		className={cx(styles.root, props.className, {
			[styles.square]: props.appearance == "square",
		})}
		style={{
			width: props.size || "32px",
			height: props.size || "32px",
		}}
	>
		<RadixAvatar.Image className={styles.image} src={props.src} alt={props.alt} />
		<RadixAvatar.Fallback className={styles.fallback} delayMs={props.src ? 500 : 0}>
			<svg width="100%" height="100%" viewBox="0 0 75 75">
				<text x="22" y="57" fontSize="50" fill="#FFFFFF">
					{props.alt?.charAt(0)?.toUpperCase()}
				</text>
			</svg>
		</RadixAvatar.Fallback>
	</RadixAvatar.Root>
);

export default Avatar;
