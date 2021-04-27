// @ts-nocheck

import React from "react";
import { css, cx } from "@emotion/css";
import colors from "../shared/colors";
import Avatar from "./Avatar";

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

const overflowCss = css`
	flex: 1;
	background: ${colors.gray100};
	color: ${colors.gray600};
	align-items: center;
	justify-content: center;
	border: 3px solid #ffffff;
	border-radius: 50%;
	box-sizing: border-box;
	display: flex;
	font-size: 12px;
	margin-left: -7px;
	width: inherit;
	height: inherit;
`

const AvatarGroup: React.FC<AvatarGroupProps> = (props) => {
	const count = props.maxCount || 5;
	const size = props.size || 32;
	return (
		<div className={cx(rootCss, props.className)}>
			{props.data?.slice(0, count).map(avatar => 
				<Avatar src={avatar.src} alt={avatar.alt} size={size} />	
			)}
			{props.data?.length > count
				? <span onClick={() => props.onMoreClick && props.onMoreClick()} className={overflowCss} style={{width: size}}>+{props.data.length - count}</span>
				: undefined
			}
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
	size?: number;

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

export default AvatarGroup;
