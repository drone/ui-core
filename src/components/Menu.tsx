
// @ts-nocheck

import React, { ReactNode } from "react";
import { css, cx } from "@emotion/css";
import colors from "../shared/colors";
import Button from "./Button";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

const rootCss = css`

`;

const triggerCss = css`
	appearance: none;
	background: none;
	border: none;
	padding: 0px;
	margin: 0px;
`;

const contentCss = css`
	min-width: 130px;
	background: #FFFFFF;
	border-radius: 6px;
	padding: 5px;
	margin-top: 5px;
	box-shadow: 0px 5px 15px -5px hsla(206,22%,7%,.15);
`;

const itemCss = css`
	font-size: 14px;
	cursor: pointer;
	padding: 10px 12px;
	border-radius: 6px;

	&:hover {
		background: ${colors.gray100};
		color: ${colors.gray700};
		outline: none;
	}

	&:focus {
		background: ${colors.gray100};
		color: ${colors.gray700};
		outline: none;
	}
`;

export const MenuItem = (props) => {
	return (
		<DropdownMenu.Item className={itemCss} onSelect={props.onSelect}>
			{props.children}
		</DropdownMenu.Item>
	);
};

export default (props) => {
	return (
		<DropdownMenu.Root className={rootCss}>
			<DropdownMenu.Trigger className={triggerCss}>
				{props.button || <Button>{props.trigger}</Button>}
			</DropdownMenu.Trigger>
			<DropdownMenu.Content className={contentCss}>
				{props.children}
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	);
};
