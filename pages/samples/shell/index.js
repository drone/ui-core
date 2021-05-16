import { useRouter } from "next/router";
import { ShellLayout } from "../../../src/layouts/Shell";
import { HeaderLayout } from "../../../src/layouts/Header";
import { Header } from "../../../src/components/header/Header";
import { Avatar } from "../../../src/components/avatar/Avatar";
import { SideBar } from "../../../src/components/sidebar/Sidebar";
import { css } from "@emotion/css";
import { UtilityBar, UtilityBarButton } from "../../../src/components/utilitybar/utilitybar";

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
    const handleAvatar = () => {
        window.alert("avatar click")
    }
    const header = <Header title="Pipelines" />;
    const avatar = (
        <Avatar src="/avatar.webp" />
    )
    const utilitybar = (
        <UtilityBar>
            <UtilityBarButton icon={<SearchIcon/>} onClick={()=> window.alert("click search")} />
            <UtilityBarButton icon={<BellIcon/>} onClick={()=> window.alert("click alerts")} />
            <UtilityBarButton icon={<ChatIcon/>} onClick={()=> window.alert("click help")} />
        </UtilityBar>
    );
    const drawer = (
       <ul>
           <li><a href="#" data-selected="true" className="selected">Overview</a></li>
           <li><a href="#">Deployment</a></li>
           <li><a href="#">Pipelines</a></li>
           <li><a href="#">Environments</a></li>
           <li><a href="#">Resources</a></li>
           <li><hr /></li>
           <li><a href="#">Settings</a></li>
       </ul> 
    );

	return (
        <ShellLayout onLogo={handleLogo} drawer={drawer} utilitybar={utilitybar} logoSelected={false} avatarSelected={false} avatar={avatar} onLogo={handleLogo} onAvatar={handleAvatar}>
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
        </ShellLayout>
    );
}

const DocumentIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>
)

const ChatIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
)

const BellIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
)

const SearchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
)