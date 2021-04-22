import React from "react";
import { css, cx } from "@emotion/css";

// TODO add maximum parameter that defines maximum number of avatars
// TODO add overflow button
// TODO add overflow button type

const rootCss = css`
	display: inline-flex;

	&> span {
		border: 3px solid #ffffff;
		box-sizing: border-box;
		margin-left: -7px;
	}

	&> span:first-child {
		margin-left: 0px;
	}
`;

const AvatarGroup: React.FC<AvatarGroupProps> = (props) => (
	<div className={cx(rootCss, props.className)}>{props.children}</div>
);

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
	size?: number;

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

export default AvatarGroup;
