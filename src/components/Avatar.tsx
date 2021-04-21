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

const Avatar: React.FC<AvatarProps> = (props) => (
	<RadixAvatar.Root
		className={cx(rootCss, props.className)}
		style={{ width: props.size || "32px", height: props.size || "32px" }}
	>
		<RadixAvatar.Image className={imageCss} src={props.src} alt={props.alt} />
		<RadixAvatar.Fallback className={fallbackCss} delayMs={props.src ? 500 : 0}>
			{props.alt?.charAt(0)}
		</RadixAvatar.Fallback>
	</RadixAvatar.Root>
);

export interface AvatarProps {
	className?: string;
	src?: string;
	alt?: string;
	size?: string | AvatarSize;
}

export default Avatar;
