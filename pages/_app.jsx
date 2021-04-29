import "../public/styles.css";
import "../src/shared/colors.css";

import { useRouter } from "next/router";
import Layout from "../docs/layout";

export default function ({ Component, pageProps }) {
	const router = useRouter();

	// example pages should be served without
	// the wrapper template.
	if (router.asPath.startsWith("/samples")) {
		return <Component {...pageProps} />;
	}

	return (
			<Layout>
				<Component {...pageProps} />
			</Layout>
	);
}
