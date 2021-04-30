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
import styles from "./Register.module.css";

export default (props) => {
	const usernameElem = useRef(null);
	const passwordElem = useRef(null);
	const handleRegister = (e) => {
		if (props.onLogin) {
			e.data = {
				username: usernameElem.current.value,
				password: passwordElem.current.value,
			};
			props.onRegister(e);
		}
	};
	return (
		<>
			<div className={styles.root}>
				<button className={styles.signin} onClick={props.onLogin}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<line x1="19" y1="12" x2="5" y2="12"></line>
						<polyline points="12 19 5 12 12 5"></polyline>
					</svg>
					Sign in
				</button>
				<button className={styles.logo} onClick={props.onLogo} alt="logo">
					<Harness />
				</button>
				<h2>
					Sign up for an account <small>and Get Ship Done</small>
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
				<button className={styles.register} onClick={handleRegister}>
					Register
				</button>
			</div>
		</>
	);
};
