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

import React, { ReactNode } from "react";
import cx from "classnames";
import Icon from "../../assets/icons/Close";
import * as RadixDialog from "@radix-ui/react-dialog";

// @ts-ignore
import styles from "./Dialog.module.css";

export const Dialog: React.FC<DialogProps> = (props) => (
	<RadixDialog.Root open={props.open} onOpenChange={props.onOpenChange}>
		<RadixDialog.Overlay className={styles.overlay} />
		<RadixDialog.Content
			className={styles.dialog}
			data-width={props.width || "medium"}
		>
			{props.heading ? <div>{props.heading}</div> : undefined}
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
	/**
	 * Add a classname to the dialog.
	 */
	className?: string;

	/**
	 * The controlled open state of the dialog. Must be used in
	 * conjunction with onOpenChange.
	 */
	open?: boolean;

	/**
	 * Heading for the modal dialog.
	 */
	heading?: ReactNode;

	/**
	 * Width of the dialog. The recommended way to specify dialog
	 * width is using named size options.
	 */
	width?: "small" | "medium" | "large" | "xlarge";

	/**
	 * Do not use. This prop has been deprecated.
	 */
	showClose?: boolean;

	/**
	 * Callback function called when the modal changes state.
	 * @param open
	 */
	onOpenChange(open: boolean): void;
}
