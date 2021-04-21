// @ts-nocheck

import { css, cx } from "@emotion/css";

const rootCss = css`
	align-items: center;
	background: #fff;
	border-bottom: 1px solid rgba(0, 0, 0, 0.1);
	box-sizing: border-box;
	display: flex;
	min-height: 80px;
	padding: 0 60px;

	h1 {
		font-size: 20px;
		font-weight: 500;
		line-height: 20px;
		margin: 0px;
		padding: 0px;
		user-select: none;
	}

	@media only screen and (max-width: 800px) {
		padding: 0px 30px;
	}
`;

export default (props) => {
	return (
		<div className={cx(rootCss, props.className)}>
			<h1>{props.title}</h1>
		</div>
	);
};
