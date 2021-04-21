// @ts-nocheck

import { useRef } from "react";
import { css, cx } from "@emotion/css";
import colors from "../shared/colors";

import * as ToggleGroup from "@radix-ui/react-toggle-group";

const groupCss = css`
	& > button {
		margin-right: 6px;
	}

	& > button:last-child {
		margin-right: 0px;
	}
`;

const itemCss = css`
	background-color: #ffffff;
	border: 1px solid #b0b1c3;
	color: #4f5162;
	border-radius: 100px;
	cursor: pointer;
	text-transform: uppercase;
	font-family: Inter;
	font-weight: 500;
	font-size: 11px;
	line-height: 16px;
	padding: 0px 8px;

	&:focus {
		outline: none;
	}

	&[data-state="on"] {
		background-color: #0a3364;
		border: 1px solid #0a3364;
		color: #ffffff;
	}
`;

export const ToggleItem = (props) => {
	const handleClick = (event) => {
		// this hack prevent a selected item from
		// being unselected, which effective enforces
		// an item to always be selected.
		if (event.target.ariaPressed === "true") {
			event.preventDefault();
			event.stopPropagation();
			return;
		}
	};
	return (
		<ToggleGroup.Item
			onClick={handleClick}
			className={itemCss}
			value={props.text}
		>
			{props.text}
		</ToggleGroup.Item>
	);
};

export default (props) => {
	return (
		<ToggleGroup.Root
			className={groupCss}
			type="single"
			defaultValue={props.defaultValue}
			value={props.value}
			onValueChange={props.onValueChange}
		>
			{props.children}
		</ToggleGroup.Root>
	);
};
