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
				props.fitParent && styles.fill,
				props.iconBefore && styles.hasIconBefore,
				props.iconAfter && styles.hasIconAfter,
				props.className
			)}
			data-appearance={props.appearance || "default"}
			data-type={props.type || "default"}
		>
			{props.iconBefore}
			{props.children}
			{props.iconAfter}
		</button>
	);
}

export interface AvatarProps {
	/**
	 * Set the button to autofocus on mount
	 */
	autoFocus?: boolean;

	/**
	 * Add a classname to the button
	 */
	className?: string;

	/**
	 * Text content to be rendered in the button.
	 */
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
	 * Option to fit button width to its parent width.
	 */
	fitParent?: boolean;

	/**
	 * Places an icon within the button, before the button's text.
	 */
	iconBefore?: ReactNode;

	/**
	 * Places an icon within the button, after the button's text.
	 */
	iconAfter?: ReactNode;

	/**
	 * Set if the button is disabled.
	 */
	disabled?: boolean;
}
