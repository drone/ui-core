// @ts-nocheck
import { useRef, useState, useEffect } from "react";

import { css, cx } from "@emotion/css";

const rootCss = css`
	display: block;
	overflow: hidden;
	background: #ffffff;
	position: relative;
	color: #000000;

	appearance: none;
	box-sizing: border-box;
	border: 1px solid rgb(209, 213, 219);
	border-radius: 3px;
	width: 100%;
	outline: none;
`;

const buttonCss = css`
	appearance: none;
	border: none;
	background: none;
	cursor: pointer;
	position: absolute;
	right: 12px;
	top: 12px;
	text-transform: uppercase;
`;

const contentCss = css`
	padding: 30px;
	padding-right: 60px;
	font-family: "Roboto Mono", "Lucida Console", "Monaco", monospace;
	font-size: 14px;
	white-space: nowrap;
	overflow-y: auto;
	line-height: 20px;
`;

export default (props) => {
	const [copied, setCopied] = useState(false);
	const contentElem = useRef(null);
	const handleCopy = () => {
		setCopied(true);
		navigator.clipboard &&
			navigator.clipboard.writeText(contentElem.current.innerText);
	};

	useEffect(() => {
		if (copied) {
			const timer = setTimeout(() => setCopied(false), 3000);
			return () => clearTimeout(timer);
		}
	}, [copied]);

	return (
		<div className={cx(rootCss, props.className)}>
			<div ref={contentElem} className={contentCss}>
				{props.text}
			</div>
			<button onClick={handleCopy} className={buttonCss} alt="Copy">
				{copied ? "Copied" : "Copy"}
			</button>
		</div>
	);
};
