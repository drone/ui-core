import { css } from "@emotion/css";
import colors from "../src/shared/colors";
import Link from "next/link";
import Harness from "../src/assets/logos/HarnessLarge";

const rootCss = css`
    background-color: ${colors.gray50};
    border-bottom: 1px solid ${colors.gray100};
    padding: 30px 80px 30px 80px;

    h1 {
        display: block;
        font-size: 32px;
        font-weight: 500;
        margin: 10px 0px;
        margin-bottom: 15px;
    }

    p {
        color: ${colors.gray500};
        display: block;
        font-size: 16px;
        font-weight: 400;
        line-height: 22px;
        max-width: 600px;
        padding: 0px;
        margin: 0px;
    }
`

export default () => {
	return (
		<header className={rootCss}>
            <h1>Logo</h1>
            <p>A logo is a visual representation of a brand or product. It can be a word or an image, or a combination of both.</p>
		</header>
	)
}
