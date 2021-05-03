// Copyright 2021 Harness, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// 	   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// @ts-nocheck

import { useRef } from "react";
import Input from "../../components/input";
import Harness from "../../assets/logos/HarnessLarge";

// @ts-ignore
import styles from "./Login.module.css";

// TODO support for overriding the default logo
// TODO use harness color variables
// TODO use harness spacing variables

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
		<div className={styles.root}>
			<button className={styles.logo} onClick={props.onLogo} alt="logo">
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
			<button className={styles.login} onClick={handleLogin}>
				Login
			</button>
			<div className={styles.register}>
				No Account? <button onClick={props.onRegister}>Get Started</button>
			</div>
		</div>
	);
};
