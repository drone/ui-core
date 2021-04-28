import React, { ReactNode } from "react";
import { css, cx } from "@emotion/css";
import colors from "../shared/colors";
import * as RadixTooltip from "@radix-ui/react-tooltip";

const triggerCss = css`
	appearance: none;
	background: none;
	border: none;
	outline: none;
	margin: 0px;
	padding: 0px;
`;

const contentCss = css`
	background: ${colors.gray900};
	border-radius: 3px;
	color: #ffffff;
	display: inline-flex;
	font-size: 13px;
	padding: 5px 10px;
`;

const arrowCss = css`
	color: ${colors.gray900};
	height: 5px;
`;

const Tooltip: React.FC<TooltipProps> = (props) => (
	<RadixTooltip.Root delayDuration={200}>
		<RadixTooltip.Trigger className={triggerCss}>
			{props.children}
		</RadixTooltip.Trigger>
		<RadixTooltip.Content className={cx(contentCss, props.className)}>
			{props.content}
			<RadixTooltip.Arrow className={arrowCss} />
		</RadixTooltip.Content>
	</RadixTooltip.Root>
);

export interface TooltipProps {
	className?: string;
	content?: string;
	children: ReactNode;
}

export default Tooltip;
