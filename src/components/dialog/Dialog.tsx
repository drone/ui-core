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

import React from "react";
import cx from "classnames";
import Icon from "../../assets/icons/Close";
import * as RadixDialog from "@radix-ui/react-dialog";

// @ts-ignore
import styles from "./Dialog.module.css";

const Dialog: React.FC<DialogProps> = (props) => (
	<RadixDialog.Root open={props.open} onOpenChange={props.onOpenChange}>
		<RadixDialog.Overlay className={styles.overlay} />
		<RadixDialog.Content className={styles.dialog}>
			{props.children}
			{props.showClose ? (
				<RadixDialog.Close className={styles.close}>
					<Icon />
				</RadixDialog.Close>
			) : undefined}
		</RadixDialog.Content>
	</RadixDialog.Root>
);

export interface DialogProps {
	className?: string;
	open?: boolean;
	showClose?: boolean;
	onOpenChange(open: boolean): void;
}

export default Dialog;
