import React from "react";
import cx from "classnames";

// @ts-ignore
import styles from "./Badge.module.css";

export interface BadgeProps {
	className?: string;

	/**
	 * Defines the appearance of the Badge.
	 */
    appearance?: "default" | "primary" | "important";
    
    /**
     * Defines the maximum value for the Badge. The
     * default max value for a badge is 99.
     */
    max?: number;
}

const Badge: React.FC<BadgeProps> = (props) => {
    const max = props.max || 99;
    const appearance = props.appearance || "default";
	return (
        <span className={cx(styles.root, props.className, {
            [styles.primary]: appearance === "primary",
            [styles.important]: appearance === "important",
        })}>{props.children}</span>
    );
};

export default Badge;
