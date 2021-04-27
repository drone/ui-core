import { css, cx } from "@emotion/css";
import colors from "../src/shared/colors";
import Link from "next/link";
import { useRouter } from "next/router";
import routes, { samples } from "./routes";

const rootCss = css`
    grid-area: sidebar;

    border-right: 1px solid ${colors.gray200};
    box-sizing: border-box;
    padding: 30px 0px 60px 0px;

    h2 {
        border-top: 1px solid ${colors.gray100};
        text-transform: uppercase;
        font-size: 12px;
        font-weight: 600;
        letter-spacing: 1px;
        user-select: none;
        margin: 24px 0px 12px 0px;
        padding: 30px 12px 0px 36px;

        &:first-of-type {
            margin-top: 10px;
            border-top: 0px;
            padding-top: 0px;
        }
    }
`

const linkCss = css`
    box-sizing: border-box;
    border-left: 4px solid transparent;
    color: ${colors.gray500};
    display: block;
    font-size: 14px;
    text-decoration: none;
    line-height: 34px;
    padding: 0px 32px;
    user-select: none;

    &:active,
    &:visited {
        color: ${colors.gray500};
    }

    &:hover {
        background-color: ${colors.gray100};
    }

    &[href="/#"]:after {
        content: "coming soon";
        font-size: 11px;
        text-transform: uppercase;
        margin-left: 5px;
        border-radius: 3px;
        background: #F3F3FA;
        color: #9293AB;
        padding: 2px 5px;
    }

    &.active {
        background-color: ${colors.gray100};
        border-left: 4px solid ${colors.primary7};
    }
`

export default () => {
    const router = useRouter();

	return (
		<aside className={rootCss}>
            <h2>Components</h2>
            {routes.map(route => (
                <ActiveLink name={route.name} path={route.path} active={route.path === router.pathname} />
            ))}

            <h2>Samples</h2>
            {samples.map(route => (
                <ActiveLink name={route.name} path={route.path} active={route.path === router.pathname} />
            ))}
		</aside>
	)
}

const ActiveLink = ({name, path, active}) => {
    return (
        <Link href={path || '/#'}>
            <a className={cx(linkCss, active && "active")}>{name}</a>
        </Link>
    );
}