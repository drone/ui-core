import { css } from "@emotion/css";
import { useRouter } from "next/router";
import colors from "../src/shared/colors";
import Link from "next/link";
import Harness from "../src/assets/logos/HarnessLarge";
import routes from "./routes";
import { route } from "next/dist/next-server/server/router";

const rootCss = css`
    background-color: ${colors.gray50};
    border-bottom: 1px solid ${colors.gray100};
    padding: 40px 80px 40px 80px;
    user-select: none;

    h1 {
        display: block;
        font-size: 36px;
        font-weight: 500;
        margin: 0px;
        margin-bottom: 5px;
        letter-spacing: 0.5px;
        color: ${colors.gray800};
    }

    p {
        color: ${colors.gray500};
        display: block;
        font-size: 16px;
        font-weight: 400;
        line-height: 22px;
        max-width: 800px;
        padding: 0px;
        margin: 0px;
    }
`

export default () => {
    const router = useRouter();
    const selected = routes.find(route => {
        return router.pathname === route.path;
    })
	return (
		<header className={rootCss}>
            <h1>{selected?.name}</h1>
            <p>{selected?.desc}</p>
		</header>
	)
}
