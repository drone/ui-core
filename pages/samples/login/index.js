import { useRouter } from "next/router";
import { LoginLayout, Splash } from "../../../src/layouts/Login";
import { LoginFragment } from "../../../src/fragments/login/Login";

export default () => {
	const router = useRouter()
	const handleLogin = (e) => {
		console.debug("login", e)
		window.alert("login clicked")
	}
	const handleRegister = () => {
		router.push("register")
	}
	const handleLogo = () => {
		router.push("/")
	}
	return (
        <LoginLayout splash={<Splash />}>
			<LoginFragment onLogin={handleLogin} onRegister={handleRegister} onLogo={handleLogo} />
        </LoginLayout>
    );
}
