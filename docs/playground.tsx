import Highlight, { defaultProps } from "prism-react-renderer";
import {LiveProvider, LiveEditor, LiveError, LivePreview} from "react-live";
import { css } from "@emotion/css";
import colors from "../src/shared/colors";
import theme from "./theme";

const rootCss = css`
	border-radius: 6px;
	border: 1px solid ${colors.gray200};
	margin: 20px 0px;
	overflow: hidden;
`

const previewCss = css`
	background-color: rgb(255, 255, 255);
	background-image:
		linear-gradient(45deg, rgb(249, 249, 250) 25%, transparent 25%),
		linear-gradient(135deg, rgb(249, 249, 250) 25%, transparent 25%),
		linear-gradient(45deg, transparent 75%, rgb(249, 249, 250) 75%),
		linear-gradient(135deg, transparent 75%, rgb(249, 249, 250) 75%);
	background-size: 20px 20px;
	background-position: 0px 0px, 10px 0px, 10px -10px, 0px 10px;
	border-radius: 3px 3px 0px 0px;
	padding: 30px;
	user-select: none;

	&> div {
		display: inline-flex;
		width: 100%;
	}

	&> div > * {
		margin-right: 5px;
	}
`

const editorCss = css`
	background: ${colors.gray100};
	border-top: 1px solid ${colors.gray200};
	padding: 10px 30px 10px 30px;

	textarea {
		outline: none !important;
	}
`

// Playground implements a live editor and preview component.
export default ({code, scope}) => {
	return (
		<div className={rootCss}>
			<LiveProvider code={code} scope={scope} theme={theme}>
				<div className={previewCss}>
					<LivePreview />
					<LiveError />
				</div>
				<div className={editorCss}>
					<LiveEditor />
				</div>
			</LiveProvider>
		</div>
	)
}
