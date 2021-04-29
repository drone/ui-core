// @ts-nocheck

import { useRef } from "react";
import { css, cx } from "@emotion/css";
import Input from "../../components/input";
import Harness from "../../assets/logos/HarnessLarge";

const rootCss = css`
	input {
		width: 100%;
		margin-bottom: 24px;

		box-shadow: inset 0 0.5px 4px rgb(96 97 112 / 10%);
		border: 1px solid #b0b1c3;
		border-radius: 8px;
		height: 40px;
		padding: 0 9pt;
	}

	h2 {
		font-weight: 600;
		font-size: 32px;
		line-height: 36px;
		margin-top: 0px;
		margin-bottom: 32px;
		user-select: none;

		small {
			display: block;
			text-transform: lowercase;
			font-weight: 400;
			font-size: 16px;
		}
	}
`;

const logoCss = css`
	appearance: none;
	background: none;
	border: none;
	cursor: pointer;
	margin: 0px;
	margin-bottom: 60px;
	padding: 0px;
	user-select: none;

	svg {
		height: 36px;
	}
`;

const registerCss = css`
	margin-top: 64px;
	font-size: 15px;
	user-select: none;

	button {
		appearance: none;
		border: none;
		background: transparent;
		font-size: 15px;
		font-family: Inter;
		padding: 0px;
		margin: 0px;
		cursor: pointer;
		color: #0278d5;
	}
`;

const loginCss = css`
	background: #0278d5;
	box-shadow: 0 0 1px rgb(40 41 61 / 4%), 0 2px 4px rgb(96 97 112 / 16%);
	border-radius: 8px;
	height: 40px;
	color: #fff;
	border: none;
	width: 100%;
	padding: 0 9pt;
	text-transform: uppercase;
	font-size: 14px;
	font-family: Inter;
	user-select: none;
	cursor: pointer;
	transition: background-color 0.1s ease-in;

	&:hover {
		background: #04aae4;
	}
`;

export default (props) => {
	const usernameElem = useRef(null);
	const passwordElem = useRef(null);
	const handleLogin = (e) => {
		if (props.onLogin) {
			e.data = {
				username: usernameElem.current.value,
				password: passwordElem.current.value,
			};
			props.onLogin(e);
		}
	};
	return (
		<div className={rootCss}>
			<button className={logoCss} onClick={props.onLogo} alt="logo">
				<Harness />
			</button>
			<h2>
				Sign in <small>And Get Ship Done</small>
			</h2>
			<div>
				<Input
					ref={usernameElem}
					type="text"
					name="username"
					placeholder="Email"
				/>
			</div>
			<div>
				<Input
					ref={passwordElem}
					type="password"
					name="password"
					placeholder="Password"
				/>
			</div>
			<button className={loginCss} onClick={handleLogin}>
				Login
			</button>
			<div className={registerCss}>
				No Account? <button onClick={props.onRegister}>Get Started</button>
			</div>
		</div>
	);
};
