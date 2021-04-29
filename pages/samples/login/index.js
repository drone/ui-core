import { useRouter } from "next/router";
import Login, {Splash} from "../../../src/layouts/Login";
import LoginForm from "../../../src/fragments/login";

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
        <Login splash={<Splash />}>
			<LoginForm onLogin={handleLogin} onRegister={handleRegister} onLogo={handleLogo} />
        </Login>
    );
}
