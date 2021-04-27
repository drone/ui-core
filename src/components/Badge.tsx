import React from "react";
import { css, cx } from "@emotion/css";
import colors from "../shared/colors";

const rootCss = css`
    appearance: none;
    background: ${colors.gray200};
    box-sizing: border-box;
    border-radius: 24px;
    color: ${colors.gray600};
    font-size: 12px;
    line-height: 12px;
    padding: 2px 6px;
`;

const primaryCss = css`
    background: ${colors.blue700};
    color: #FFFFFF;
`

const importantCss = css`
    background: ${colors.red700};
    color: #FFFFFF;
`

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
        <span className={cx(rootCss, props.className, {
            [primaryCss]: appearance === "primary",
            [importantCss]: appearance === "important",
        })}>{props.children}</span>
    );
};

export default Badge;
