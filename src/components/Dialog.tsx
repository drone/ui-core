import React from "react";
import { css, cx } from "@emotion/css";
import colors from "../shared/colors";
import * as RadixDialog from "@radix-ui/react-dialog";

const dialogCss = css`
	background: #ffffff;
	box-shadow: 0px 2px 8px rgba(40, 41, 61, 0.08),
		0px 20px 32px rgba(96, 97, 112, 0.24);
	border-radius: 16px;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	min-width: 200px;
	max-width: fit-content;
	max-height: 85vh;
	padding: 24px;
	margin-top: -5vh;
	background-color: white;
	border-radius: 6px;
	z-index: 999;
`;

const overlayCss = css`
	background-color: rgba(0, 0, 0, 0.1);
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 999;
`;

const Dialog: React.FC<DialogProps> = (props) => (
	<RadixDialog.Root open={props.open} onOpenChange={props.onOpenChange}>
		<RadixDialog.Overlay className={overlayCss} />
		<RadixDialog.Content className={dialogCss}>
			{props.children}
			{props.hideClose ? undefined : (
				<RadixDialog.Close>Close</RadixDialog.Close>
			)}
		</RadixDialog.Content>
	</RadixDialog.Root>
);

export interface DialogProps {
	className?: string;
	open?: boolean;
	hideClose?: boolean;
	onOpenChange(open: boolean): void;
}

export default Dialog;
