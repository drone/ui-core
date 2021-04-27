import { css } from "@emotion/css";
import Navbar from "./navbar";
import Header from "./header";
import Sidebar from "./sidebar";
import colors from "../src/shared/colors";

const rootCss = css`
    display: grid;
    grid-template-rows: 64px auto 1fr;
    grid-template-columns: 300px 1fr;

    grid-template-areas:
        "navbar navbar"
        "sidebar header"
        "sidebar content";

    width: 100vw;
    height: 100%;
`

const contentCss = css`
    grid-area: content;

    color: ${colors.gray900};
    font-size: 14px;
    line-height: 21px;
    max-width: 800px;
    padding: 40px 80px 80px 80px; 
`

export default (props) => {
	return (
        <div className={rootCss}>
		    <Navbar />
            <Sidebar />
            <Header />
            <main className={contentCss}>
                {props.children}
            </main>
        </div>
	)
}
