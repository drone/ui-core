import { css } from "@emotion/css";
import colors from "../src/shared/colors";
import Link from "next/link";
import Harness from "../src/assets/logos/HarnessLarge";

const rootCss = css`
    grid-area: navbar;
    align-items: center;
    background-color: ${colors.primary9};
    display: flex;
    padding: 0px 20px;
    position: sticky;
    top: 0px;
    z-index: 999;
`

const logoCss = css`
    cursor: pointer;
    outline: none;
    text-decoration: none;
    user-select: none;

    svg {
        height: 28px;
    }

    .wordmark {
        fill: #FFFFFF;
    }
`

export default () => {
	return (
		<nav className={rootCss}>
            <Link href="/">
                <a className={logoCss}>
                    <Harness />
                </a>
            </Link>
		</nav>
	)
}
