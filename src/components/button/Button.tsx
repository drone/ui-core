// @ts-nocheck

import { ReactNode } from "react";
import cx from "classnames";

// @ts-ignore
import styles from "./Button.module.css";

// Button renders the Button component.
export default function Button(props) {
	return (
		<button
			disabled={props.disabled}
			onClick={props.onClick}
			className={cx(
				styles.root,
				props.rounded && styles.rounded,
				props.className
			)}
			data-appearance={props.appearance || "default"}
			data-type={props.type || "default"}
		>
			{props.children}
		</button>
	);
}

export interface AvatarProps {
	className?: string;
	children: ReactNode;

	/**
	 * Defines the appearance of the button.
	 */
	appearance?: "default" | "outline";

	/**
	 * Defines the intent of the button.
	 */
	type?: "default" | "danger" | "warning" | "success";

	/**
	 * Renders the button with rounded corners.
	 */
	rounded?: boolean;

	/**
	 * Disables the button..
	 */
	disabled?: boolean;
}
