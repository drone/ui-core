// @ts-nocheck

import React from "react";
import { css, cx } from "@emotion/css";

const rootCss = css`
	appearance: none;
	box-sizing: border-box;
	border: 1px solid #d1d5db;
	border-radius: 3px;
	background-color: #ffffff;
	font-family: Inter;
	padding: 8px 12px;
	outline: none;

	&[disabled] {
		background-color: #f9fafb;
		cursor: not-allowed;
	}

	&:focus {
		border-color: #2563eb;
		box-shadow: 0 0 0 2px #bfdbfe;
	}

	&::placeholder {
		color: #9ca3af;
	}
`;

export default React.forwardRef((props, ref) => (
	<input
		type={props.type || "text"}
		ref={ref}
		value={props.value}
		className={cx(rootCss, props.className)}
		onClick={props.onClick}
		onChange={props.onChange}
		onMouseEnter={props.onMouseEnter}
		onMouseLeave={props.onMouseLeave}
		disabled={props.disabled}
		spellCheck={props.spellCheck}
		placeholder={props.placeholder}
	/>
));
