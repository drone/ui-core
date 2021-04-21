import { useRouter } from "next/router";
import "../public/styles.css";
import Link from "next/link";
import { MDXProvider } from "@mdx-js/react";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/vsLight";
import HarnessLarge from "../src/assets/logos/HarnessLarge";

function Code({ children, className }) {
	const language = className.replace(/language-/, "");
	return (
		<Highlight
			{...defaultProps}
			theme={theme}
			code={children.trim()}
			language={language}
		>
			{({ className, style, tokens, getLineProps, getTokenProps }) => (
				<pre
					className={className}
					style={{
						...style,
						overflow: "scroll",
						marginTop: 20,
						marginBottom: 20,
						padding: 16,
					}}
				>
					{tokens.map((line, i) => (
						<div key={i} {...getLineProps({ line, key: i })}>
							{line.map((token, key) => (
								<span key={key} {...getTokenProps({ token, key })} />
							))}
						</div>
					))}
				</pre>
			)}
		</Highlight>
	);
}

const components = {
	code: Code,
};

export default function ({ Component, pageProps }) {
	const router = useRouter();

	// example pages should be served without
	// the wrapper template.
	if (router.asPath.startsWith("/samples")) {
		return <Component {...pageProps} />;
	}

	return (
		<MDXProvider components={components}>
			<main>
				<Link href="/">
					<a className="logo">
						<HarnessLarge />
					</a>
				</Link>
				<Component {...pageProps} />
			</main>
		</MDXProvider>
	);
}
