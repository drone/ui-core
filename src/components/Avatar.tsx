import React from "react";
import { css, cx } from "@emotion/css";
import colors from "../shared/colors";
import * as RadixAvatar from "@radix-ui/react-avatar";

const rootCss = css`
	display: inline-block;
	border-radius: 50%;
	overflow: hidden;
	user-select: none;
	font-size: 15px;
`;

const imageCss = css`
	flex: 1 1 auto;
	width: inherit;
	height: inherit;
`;

const fallbackCss = css`
	flex: 1;
	background: ${colors.main};
	color: #ffffff;
	width: inherit;
	height: inherit;
	display: flex;
	align-items: center;
	justify-content: center;
`;

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
}

const Avatar: React.FC<AvatarProps> = (props) => (
	<RadixAvatar.Root
		className={cx(rootCss, props.className)}
		style={{ width: props.size || "32px", height: props.size || "32px" }}
	>
		<RadixAvatar.Image className={imageCss} src={props.src} alt={props.alt} />
		<RadixAvatar.Fallback className={fallbackCss} delayMs={props.src ? 500 : 0}>
			<svg width="100%" height="100%" viewBox="0 0 75 75">
				<text x="22" y="57" fontSize="50" fill="#FFFFFF">
					{props.alt?.charAt(0)}
				</text>
			</svg>
		</RadixAvatar.Fallback>
	</RadixAvatar.Root>
);

export default Avatar;
