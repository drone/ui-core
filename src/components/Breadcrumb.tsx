// @ts-nocheck

import { css, cx } from "@emotion/css";
import colors from "../shared/colors";

const rootCss = css`
	display: inline-flex;
	align-items: center;

	a,
	a:visited {
		color: ${colors.primary6};
		text-decoration: none;
	}

	a:hover {
		color: ${colors.primary8};
	}

	a:active {
		color: ${colors.primary9};
	}
`;

const separatorCss = css`
	width: 16px;
	height: 16px;
	color: ${colors.primary6};
	display: inline-block;
	margin: 0px 5px;
`;

export default (props) => {
	const separator = props.separator || <Separator />;
	const children = props.children.reduce((accumulator, item) => {
		accumulator.push(item);
		accumulator.push(separator);
		return accumulator;
	}, []);
	return <div className={cx(rootCss, props.className)}>{children}</div>;
};

export const Separator = (props) => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		className={cx(separatorCss, props.className)}
	>
		<polyline points="9 18 15 12 9 6"></polyline>
	</svg>
);
