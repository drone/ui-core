import { css } from "@emotion/css";
import colors from "./colors";
/* ****** Typography ****** */
const typography = {
	formMessage: css`
		letter-spacing: 0.2px;
		font-size: 12px;
		line-height: 16px;
		color: ${colors.gray600};
		font-weight: 600;
	`,
};

const aliases = {
	display1: css`
		font-size: 64px;
		font-weight: bold;
		line-height: 1.3;
	`,
	display2: css`
		font-size: 56px;
		font-weight: normal;
		line-height: 1.3;
	`,
	lead: css`
		font-size: 14px;
		font-weight: bold;
	`,
	body2: css`
		font-size: 16px;
		line-height: 24px;
	`,
	body: css`
		font-size: 13px;
		line-height: 20px;
	`,
	blockquote: css`
		font-size: 20px;
		line-height: 28px;
	`,
	h1: css`
		font-size: 32px;
		line-height: 44px;
		font-weight: 600;
		letter-spacing: 0.5px;
	`,
	h2: css`
		font-size: 28px;
		line-height: 38px;
		font-weight: 600;
		letter-spacing: 0.5px;
	`,
	h3: css`
		font-size: 24px;
		line-height: 32px;
		font-weight: 600;
		letter-spacing: 0.5px;
	`,
	h4: css`
		font-size: 20px;
		line-height: 28px;
		font-weight: 600;
		letter-spacing: 0.5px;
	`,
	h5: css`
		font-size: 16px;
		line-height: 24px;
		font-weight: 600;
		letter-spacing: 0.5px;
	`,
	h6: css`
		font-size: 14px;
		line-height: 24px;
		font-weight: 600;
		letter-spacing: 0.5px;
	`,
	capitalized: css`
		text-transform: uppercase;
		font-size: 12px;
		letter-spacing: 1px;
	`,
	small: css`
		font-size: 12px;
		line-height: 18px;
	`,
	tiny: css`
		font-size: 10px;
	`,
	smallLabel: css`
		letter-spacing: 0.2px;
		font-size: 10px;
		line-height: 14px;
		color: ${colors.primary7};
		font-weight: 600;
	`,
	mediumLabel: css`
		letter-spacing: 0.2px;
		font-size: 12px;
		line-height: 16px;
		color: ${colors.primary7};
		font-weight: 600;
	`,
	largeLabel: css`
		letter-spacing: 0.4px;
		font-size: 14px;
		line-height: 24px;
		color: ${colors.primary7};
		font-weight: 600;
	`,
	yaml: css`
		font-family: "Roboto Mono", sans-serif, -apple-system;
		font-weight: 500;
		font-size: 13px;
		line-height: 24px;
	`,
	tableHeader: css`
		font-size: 10px; /* 12px; */
		font-weight: 600;
		text-transform: uppercase;
	`,
	cardTitle: css`
		font-size: 14px;
		line-height: 24px;
		font-weight: 600;
	`,
	/* **** Typography CSS classes aliases @2021-04-27 **** */
	dialogHeader: css`
		/* extends .h3 */
		font-size: 32px;
		line-height: 44px;
		font-weight: 600;
		letter-spacing: 0.5px;
	`,
	sectionHeader: css`
		/* extends .h5 */
		font-size: 16px;
		line-height: 24px;
		font-weight: 600;
		letter-spacing: 0.5px;
	`,
	subsectionHeader: css`
		/* extends .h6 */
		font-size: 14px;
		line-height: 24px;
		font-weight: 600;
		letter-spacing: 0.5px;
	`,
	formBody: css`
		/* extends .body */
		font-size: 13px;
		line-height: 20px;
		font-weight: normal;
	`,
	formValue: css`
		/* extends .body */
		font-size: 13px;
		line-height: 20px;
		font-weight: normal;
	`,
	formHelp: css`
		${typography.formMessage}
		color: ${colors.gray800};
		font-weight: normal;
		font-size: 12px;
		line-height: 13px;
	`,
	formMessageError: css`
		${typography.formMessage}
		color: ${colors.error};
		font-weight: normal;
		font-size: 12px;
		line-height: 13px;
	`,
	formMessageWarning: css`
		${typography.formMessage}
		color: ${colors.warning};
		font-weight: normal;
		font-size: 12px;
		line-height: 13px;
	`,
	formMessageSuccess: css`
		${typography.formMessage}
		color: ${colors.success};
		font-weight: normal;
		font-size: 12px;
		line-height: 13px;
	`,
};

export default { ...typography, ...aliases };
