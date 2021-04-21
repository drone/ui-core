import React from "react";
import { css, cx } from "@emotion/css";
import colors from "../shared/colors";
import * as RadixSwitch from "@radix-ui/react-switch";

const rootCss = css`
	display: inline-block;
	appearance: none;
	box-sizing: border-box;
	align-items: flex-start;
	border: none;
	box-sizing: border-box;
	padding: 0px;
	width: 25px;
	height: 17px;
	background: #ffffff;
	border: 1px solid #c7c9d9;
	border-radius: 25px;
	position: relative;
	overflow: hidden;
	cursor: pointer;

	&:focus {
		outline: none;
		box-shadow: 0 0 0 2px #ccddff;
	}

	&[data-state="checked"] {
		background-color: ${colors.main};
		border-color: ${colors.main};
	}

	&[disabled] {
		cursor: not-allowed;
		background-color: #f2f2f5;
		border-color: #ebebf0;
	}

	&[disabled] .thumb {
		background-color: #606170;
	}
`;

const thumbCss = css`
	display: block;
	width: 11px;
	height: 11px;
	background-color: white;
	border-radius: 50%;
	box-shadow: 0px 1px 2px rgba(40, 41, 61, 0.2),
		0px 2px 4px rgba(96, 97, 112, 0.2);
	transition: transform 200ms;
	transform: translateX(1px);
	will-change: transform;

	&[data-state="checked"] {
		transform: translateX(11px);
	}
`;

const Switch: React.FC<SwitchProps> = (props) => (
	<RadixSwitch.Root
		className={cx(rootCss, props.className)}
		onCheckedChange={props.onCheckedChange}
		checked={props.checked}
		disabled={props.disabled}
	>
		<RadixSwitch.Thumb className={thumbCss} />
	</RadixSwitch.Root>
);

export interface SwitchProps {
	className?: string;
	onCheckedChange?: any;
	checked?: boolean;
	disabled?: boolean;
}

export default Switch;
