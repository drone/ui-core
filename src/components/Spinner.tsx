// @ts-nocheck

export default (props) => (
	<svg
		width={props.size || "32px"}
		height={props.size || "32px"}
		viewBox="0 0 38 38"
		xmlns="http://www.w3.org/2000/svg"
		stroke={props.color || "currentColor"}
		aria-label={props.label}
	>
		<g fill="none" fillRule="evenodd">
			<g transform="translate(1 1)" strokeWidth="2">
				<path d="M36 18c0-9.94-8.06-18-18-18">
					<animateTransform
						attributeName="transform"
						type="rotate"
						from="0 18 18"
						to="360 18 18"
						dur="1s"
						repeatCount="indefinite"
					/>
				</path>
			</g>
		</g>
	</svg>
);
