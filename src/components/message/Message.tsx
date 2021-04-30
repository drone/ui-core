// @ts-nocheck

import React from "react";
import cx from "classnames";
import { Info, Warn, Success, Danger } from "./icons";

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
					<div className={styles.icon}>{icon}</div>
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
			return <Info />;
		case "success":
			return <Success />;
		case "warning":
		case "warn":
			return <Warn />;
		case "danger":
		case "error":
		case "alert":
		default:
			return <Danger />;
	}
}
