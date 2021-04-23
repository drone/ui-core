import { css, cx } from "@emotion/css";
import colors from "../src/shared/colors";
import Link from "next/link";
import { useRouter } from "next/router";

const rootCss = css`
    grid-area: sidebar;

    border-right: 1px solid ${colors.gray200};
    box-sizing: border-box;
    padding: 30px 0px;

    h2 {
        text-transform: uppercase;
        font-size: 12px;
        font-weight: 600;
        letter-spacing: 1px;
        padding: 0px 32px;
        user-select: none;
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

const routes = [
    {
        name: "Avatar",
        path: "/avatar",
    },
    {
        name: "Avatar Group",
        path: "/avatar/group",
    },
    {
        name: "Badge",
    },
    {
        name: "Breadcrumb",
        path: "/breadcrumb",
    },
    {
        name: "Button",
        path: "/button",
    },
    {
        name: "Checkbox",
        path: "/checkbox",
    },
    {
        name: "Dialog",
        path: "/dialog",
    },
    {
        name: "Drawer",
    },
    {
        name: "Input",
        path: "/input",
    },
    {
        name: "Menu",
    },
    {
        name: "Message",
        path: "/message",
    },
    {
        name: "Popover",
    },
    {
        name: "Prompt",
    },
    {
        name: "Radio",
    },
    {
        name: "Select",
        path: "/select",
    },
    {
        name: "Select Menu",
    },
    {
        name: "Snippet",
        path: "/snippet",
    },
    {
        name: "Spinner",
        path: "/snipper",
    },
    {
        name: "Switch",
        path: "/switch",
    },
    {
        name: "Tabs",
    },
    {
        name: "Textarea",
        path: "/textarea",
    },
    {
        name: "Toaster",
    },
    {
        name: "Toggle",
        path: "/toggle",
    },
    {
        name: "Toggle Group",
    },
    {
        name: "Tooltip",
        path: "/tooltip",
    }
]

export default () => {
    const router = useRouter();

	return (
		<aside className={rootCss}>
            <h2>Components</h2>
            {routes.map(route => (
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