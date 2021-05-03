import { useRouter } from "next/router";
import Shell from "../../../src/layouts/Shell";
import HeaderLayout from "../../../src/layouts/Header";
import Header from "../../../src/components/header";
import { css } from "@emotion/css";

const contentCss = css`
max-width: 1100px;
margin: 0px auto;
padding: 60px;

@media only screen and (max-width: 800px) {
    padding: 30px 30px;
}
`

const cardCss = css`
margin: 30px 0px;
background: #FFFFFF;
height: 200px;
box-shadow: 0 0 1px rgb(40 41 61 / 8%), 0 0.5px 2px rgb(96 97 112 / 16%);

img {
    height: 200px;
    width: 100%;
}

&:first-of-type {
    margin-top: 0px;
}

&:last-of-type {
    margin-bottom: 0px;
}
`

export default () => {
	const router = useRouter()
	const handleLogo = () => {
		router.push("/")
	}
    const header = <Header title="Pipelines" />;
    const drawer = <div>test</div>;
	return (
        <Shell onLogo={handleLogo} drawer={drawer}>
            <HeaderLayout header={header}>
                <div className={contentCss}>
                    <div className={cardCss}>
                        <img src="/empty.svg" />
                    </div>
                    <div className={cardCss}>
                        <img src="/empty.svg" />
                    </div>
                    <div className={cardCss}>
                        <img src="/empty.svg" />
                    </div>
                </div>
            </HeaderLayout>
        </Shell>
    );
}
