// @ts-nocheck

import React from "react";
import { css, cx } from "@emotion/css";
import colors from "../shared/colors";
import Checkmark from "../assets/icons/Checkmark";
import * as Checkbox from "@radix-ui/react-checkbox";

const rootCss = css`
	appearance: none;
	background-color: transparent;
	border: none;
	padding: 0px;
	margin: 0px;
	box-shadow: inset 0 0 0 1px #9ca3af;
	width: 15px;
	height: 15px;
	border-radius: 2px;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;
	box-sizing: border-box;
	cursor: pointer;

	&[data-state="checked"] {
		background: ${colors.primary7};
		box-shadow: inset 0 0 0 1px ${colors.primary7};
	}

	svg {
		width: 12px;
		height: 14px;
		color: #ffffff;
	}

	&:focus {
		outline: none;
		box-shadow: inset 0 0 0 1px ${colors.gray200}, 0 0 0 1px ${colors.blue100};
	}

	&[disabled] {
		cursor: not-allowed;
		box-shadow: inset 0 0 0 1px #f3f4f6;
	}

	&[data-state="checked"][disabled] {
		background: ${colors.gray100};
		box-shadow: inset 0 0 0 1px ${colors.gray100};

		svg {
			color: ${colors.gray200};
		}
	}
`;

export interface CheckboxProps {
	className?: string;
	onCheckedChange?: any;
	checked?: boolean;
	disabled?: boolean;
	ref?: any;
}

export default React.forwardRef((props, ref) => (
	<Checkbox.Root
		className={cx(rootCss, props.className)}
		onCheckedChange={props.onCheckedChange}
		disabled={props.disabled}
		checked={props.checked}
		ref={ref}
	>
		<Checkbox.Indicator as={Checkmark} />
	</Checkbox.Root>
));
