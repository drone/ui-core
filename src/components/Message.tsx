// @ts-nocheck

import React from "react";
import { css, cx } from "@emotion/css";
import colors from "../shared/colors";
import AlertIcon from "../assets/icons/Alert";
import CloseIcon from "../assets/icons/Close";
import CheckIcon from "../assets/icons/Check";
import InfoIcon from "../assets/icons/Info";

const iconCss = css`
	border-radius: 50%;
	color: #fff;
	width: 18px;
	height: 18px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${colors.blue600};
	svg {
		width: 14px;
		height: 14px;
	}
`;

const iconInfoCss = css`
	background-color: ${colors.blue600};
`;

const iconSuccessCss = css`
	background-color: ${colors.green600};
`;

const iconWarningCss = css`
	background-color: ${colors.yellow900};
`;

const iconAlertCss = css`
	background-color: ${colors.red600};
`;

const rootCss = css`
	border-radius: 2px;
	background-color: ${colors.blue50};
	display: grid;
	grid-template-columns: 20px auto;
	padding-left: 18px;
	border-left: 3px solid ${colors.blue600};
	font-size: 14px;

	&.success {
		border-color: ${colors.green600};
		background-color: ${colors.green50};
	}

	&.warn,
	&.warning {
		border-color: ${colors.yellow900};
		background-color: ${colors.yellow50};
	}

	&.alert {
		border-color: ${colors.red600};
		background-color: ${colors.red50};
	}
`;

const contentCss = css`
	padding: 16px 54px;
	padding-left: 18px;
`;

const gutterCss = css`
	display: flex;
	align-items: center;
	justify-content: center;
`;

// Renders the Alert component.
export default function Alert(props) {
	const type = props.type || "info";
	const icon = props.icon || iconLookup(type);
	return (
		<>
			<div className={cx(rootCss, type, props.className)} role="alert">
				<div className={gutterCss}>
					<div className={cx(iconCss, iconSyleLookup(type))}>{icon}</div>
				</div>
				<div className={contentCss}>{props.children}</div>
			</div>
		</>
	);
}

// helper function returns the icon by type.
function iconLookup(name: string) {
	switch (name) {
		case "info":
			return <InfoIcon />;
		case "success":
			return <CheckIcon />;
		case "warning":
		case "warn":
			return <AlertIcon />;
		case "danger":
		case "alert":
		default:
			return <CloseIcon />;
	}
}

// helper function returns the icon style by name.
function iconSyleLookup(name: string) {
	switch (name) {
		case "info":
			return iconInfoCss;
		case "success":
			return iconSuccessCss;
		case "warning":
		case "warn":
			return iconWarningCss;
		case "danger":
		case "alert":
		default:
			return iconAlertCss;
	}
}
