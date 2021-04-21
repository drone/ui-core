// @ts-nocheck

import { css, cx } from "@emotion/css";
import colors from "../shared/colors";

const rootCss = css`
	box-shadow: 0px 0px 1px rgba(40, 41, 61, 0.04),
		0px 2px 4px rgba(96, 97, 112, 0.16);
	border-radius: 8px;
	height: 40px;
	color: #fff;
	border: none;
	font-size: 14px;
	font-family: Inter;
	user-select: none;
	cursor: pointer;
	transition: all 0.2s ease-in;
	outline: none;
	background-color: ${colors.primary7};
	padding: 0px 24px;

	&:focus {
		box-shadow: 0px 0px 0px 3px ${colors.blue100};
	}

	&:hover {
		background-color: ${colors.primary5};
	}

	&:active {
		background-color: ${colors.primary8};
	}

	&:disabled {
		cursor: not-allowed;
		color: ${colors.gray300};
		background: ${colors.gray100};
		box-shadow: none;
	}
`;

const roundedCss = css`
	border-radius: 24px;
`;

const generateStyle = ({ background, hover, active, focus }) => {
	return css`
		color: #ffffff;
		border: 1px solid ${background};
		background: ${background};

		&:focus {
			box-shadow: 0px 0px 0px 3px ${focus};
		}

		&:hover {
			background: ${hover};
		}

		&:active {
			background: ${active};
		}

		&:disabled {
			background-color: #ffffff;
			border-color: ${colors.gray200};
			color: ${colors.gray200};
			box-shadow: none;
		}
	`;
};

const generateOutlineStyle = ({ color, hover, active, focus }) => {
	return css`
		color: ${color};
		border: 1px solid ${color};
		background: transparent;

		&:focus {
			box-shadow: 0px 0px 0px 3px ${focus};
		}

		&:hover {
			background-color: transparent;
			border-color: ${hover};
			color: ${hover};
		}

		&:active {
			background-color: transparent;
			border-color: ${active};
			color: ${active};
		}

		&:disabled {
			background-color: transparent;
			border-color: ${colors.gray200};
			color: ${colors.gray200};
			box-shadow: none;
		}
	`;
};

const secondaryCss = generateOutlineStyle({
	color: colors.primary7,
	hover: colors.primary5,
	active: colors.primary8,
	focus: colors.blue100,
});

const successCss = generateStyle({
	background: colors.green700,
	hover: colors.green600,
	active: colors.green800,
	focus: colors.green200,
});

const successOutlineCss = generateOutlineStyle({
	color: colors.green700,
	hover: colors.green600,
	active: colors.green800,
	focus: colors.green200,
});

const warningCss = generateStyle({
	background: colors.yellow600,
	hover: colors.yellow500,
	active: colors.yellow700,
	focus: colors.yellow100,
});

const warningOutlineCss = generateOutlineStyle({
	color: colors.yellow600,
	hover: colors.yellow500,
	active: colors.yellow700,
	focus: colors.yellow100,
});

const dangerCss = generateStyle({
	background: colors.red600,
	hover: colors.red500,
	active: colors.red900,
	focus: colors.red200,
});

const dangerOutlineCss = generateOutlineStyle({
	color: colors.red600,
	hover: colors.red500,
	active: colors.red900,
	focus: colors.red200,
});

// Button renders the Button component.
export default function Button(props) {
	return (
		<button
			disabled={props.disabled == "true"}
			className={cx(rootCss, props.className, {
				[secondaryCss]: props.secondary || props.outline == "true",
				[successCss]: props.intent === "success" && props.outline != "true",
				[warningCss]: props.intent === "warning" && props.outline != "true",
				[dangerCss]: props.intent === "danger" && props.outline != "true",
				[successOutlineCss]:
					props.intent === "success" && props.outline == "true",
				[warningOutlineCss]:
					props.intent === "warning" && props.outline == "true",
				[dangerOutlineCss]:
					props.intent === "danger" && props.outline == "true",
				[roundedCss]: props.rounded == "true",
			})}
		>
			{props.children}
		</button>
	);
}
