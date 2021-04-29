// @ts-nocheck

import React from "react";
import cx from "classnames";
import AlertIcon from "../../assets/icons/Alert";
import CloseIcon from "../../assets/icons/Close";
import CheckIcon from "../../assets/icons/Check";
import InfoIcon from "../../assets/icons/Info";

// @ts-ignore
import styles from "./Message.module.css";

// Renders the Alert component.
export default function Alert(props) {
	const type = props.type || "info";
	const icon = props.icon || iconLookup(type);
	return (
		<>
			<div
				className={cx(styles.root, props.className)}
				data-type={type}
				role="alert"
			>
				<div className={styles.gutter}>
					<div className={cx(styles.icon, iconSyleLookup(type))}>{icon}</div>
				</div>
				<div className={styles.content}>{props.children}</div>
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
			return styles.iconInfo;
		case "success":
			return styles.iconSuccess;
		case "warning":
		case "warn":
			return styles.iconWarning;
		case "danger":
		case "alert":
		default:
			return styles.iconAlert;
	}
}
