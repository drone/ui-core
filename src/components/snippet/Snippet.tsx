// @ts-nocheck
import { useRef, useState, useEffect } from "react";
import cx from "classnames";

// @ts-ignore
import styles from "./Snippet.module.css";

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
		<div className={cx(styles.root, props.className)}>
			<div ref={contentElem} className={styles.content}>
				{props.text}
			</div>
			<button onClick={handleCopy} className={styles.button} alt="Copy">
				{copied ? "Copied" : "Copy"}
			</button>
		</div>
	);
};
