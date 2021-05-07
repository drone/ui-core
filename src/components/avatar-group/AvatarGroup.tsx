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
import { Avatar } from "../avatar/Avatar";

// @ts-ignore
import styles from "./AvatarGroup.module.css";

export const AvatarGroup: React.FC<AvatarGroupProps> = (props) => {
	const count = props.maxCount || 5;
	const size = props.size || 32;
	return (
		<div className={cx(styles.root, props.className)}>
			{props.data?.slice(0, count).map((avatar) => (
				<Avatar src={avatar.src} alt={avatar.alt} size={size} />
			))}
			{props.data?.length > count ? (
				<span
					onClick={() => props.onMoreClick && props.onMoreClick()}
					className={styles.overflow}
					style={{ width: size }}
				>
					+{props.data.length - count}
				</span>
			) : undefined}
		</div>
	);
};

export interface AvatarProps {
	/**
	 * A url to load an image from.
	 */
	src?: string;

	/**
	 * Alt will be displayed in a tooltip and used as fallback
	 * content if the image fails to load.
	 */
	alt?: string;
}

export interface AvatarGroupProps {
	className?: string;

	/**
	 * Defines the size of the avatar.
	 */
	size?: string;

	/**
	 * The maximum number of avatars allowed in the list. Defaults to 5.
	 */
	maxCount?: number;

	/**
	 * Array of avatar data passed to each avatar component.
	 */
	data?: Array<AvatarProps>;

	/**
	 * Handle the click event on the avatar item.
	 */
	onAvatarClick?: (event: React.MouseEvent, index: number) => void;

	/**
	 * Handle the click event on the more button.
	 */
	onMoreClick?: (event: React.MouseEvent) => void;
}
