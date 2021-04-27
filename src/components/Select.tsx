// @ts-nocheck

import React from "react";
import { css, cx } from "@emotion/css";

const rootCss = css`
	appearance: none;
	border: 1px solid #d1d5db;
	border-radius: 3px;
	padding: 8px 12px;
	outline: none;
	box-sizing: border-box;
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23374151' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
	background-size: 18px;
	background-repeat: no-repeat;
	background-position-y: center;
	background-position-x: calc(100% - 8px);
	background-color: #ffffff;

	&[disabled] {
		background-color: #f9fafb;
		cursor: not-allowed;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23D1D5DB' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
	}

	&:focus {
		border-color: #2563eb;
		box-shadow: 0 0 0 2px #bfdbfe;
	}
`;

export default React.forwardRef((props, ref) => (
	<select
		ref={ref}
		onClick={props.onClick}
		onChange={props.onChange}
		onMouseEnter={props.onMouseEnter}
		onMouseLeave={props.onMouseLeave}
		disabled={props.disabled}
		style={{ width: props.width || "100%" }}
		className={cx(rootCss, props.className)}
	>
		{props.children}
	</select>
));
