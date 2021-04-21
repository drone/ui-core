import { useRouter } from "next/router";
import Login, {Splash} from "../../../src/layouts/Login";
import RegisterForm from "../../../src/fragments/Register";

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
        <Login splash={<Splash />}>
			<RegisterForm onLogin={handleLogin} onRegister={handleRegister} onLogo={handleLogo} />
        </Login>
    );
}
