import { useRouter } from "next/router";
import { LoginLayout, Splash} from "../../../src/layouts/Login";
import { RegisterFragment } from "../../../src/fragments/register/Register";

export default () => {
	const router = useRouter()
	const handleRegister = (e) => {
		console.debug("register", e)
		window.alert("register clicked")
	}
	const handleLogin = () => {
		router.push("login")
	}
	const handleLogo = () => {
		router.push("/")
	}
	return (
        <LoginLayout splash={<Splash />}>
			<RegisterFragment onLogin={handleLogin} onRegister={handleRegister} onLogo={handleLogo} />
        </LoginLayout>
    );
}
