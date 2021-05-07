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
import classnames from "classnames";
import * as RadixTooltip from "@radix-ui/react-tooltip";

// @ts-ignore
import styles from "./Tooltip.module.css";

export const Tooltip: React.FC<TooltipProps> = (props) => (
	<RadixTooltip.Root delayDuration={200}>
		<RadixTooltip.Trigger className={styles.trigger}>
			{props.children}
		</RadixTooltip.Trigger>
		<RadixTooltip.Content
			className={classnames(styles.content, props.className)}
		>
			{props.content}
			<RadixTooltip.Arrow className={styles.arrow} />
		</RadixTooltip.Content>
	</RadixTooltip.Root>
);

export interface TooltipProps {
	className?: string;
	content?: string;
	children: ReactNode;
}
