const colors =  {
	//
	// PRIMARY
	//

	primary1: "#effbff",
	primary2: "#cef4fe",
	primary3: "#a3e9ff",
	primary4: "#3dc7f6",
	primary5: "#00ade4", // brand
	primary6: "#0092e4",
	primary7: "#0378d5", // main
	primary8: "#004ca5",
	primary9: "#0b3364",
	primary10: "#1b1b1b",

	// Aliases
	brand: "#00ade4",
	main: "#0378d5",

	//
	// GRAYSCALE
	//

	gray0: "#FFFFFF",
	gray50: "#FAFBFC",
	gray100: "#F3F3FA",
	gray200: "#D9DAE5",
	gray300: "#B0B1C3",
	gray400: "#9293AB",
	gray500: "#6B6D85",
	gray600: "#4F5162",
	gray700: "#383946",
	gray800: "#22222A",
	gray900: "#0B0B0D",
	black: "#000000",

	//
	// PRIMARY
	//

	// Green
	green50: "#E4F7E1",
	green100: "#D8F3D4",
	green200: "#BDEAB7",
	green300: "#A2E29B",
	green400: "#86D981",
	green500: "#4DC952",
	green600: "#42AB45",
	green700: "#299B2C",
	green800: "#1B841D",
	green900: "#1E5C1F",

	// Blue
	blue50: "#F4F6FF",
	blue100: "#DAE0FF",
	blue200: "#B1BEFF",
	blue300: "#97A7FF",
	blue400: "#8598FF",
	blue500: "#798BEC",
	blue600: "#6374D0",
	blue700: "#4C5CB0",
	blue800: "#39478F",
	blue900: "#2D376D",

	// Yellow
	yellow50: "#FFFBEE",
	yellow100: "#FFF9E7",
	yellow200: "#FEF1C4",
	yellow300: "#FEE89D",
	yellow400: "#FEDF76",
	yellow500: "#FDD13B",
	yellow600: "#FDCC35",
	yellow700: "#FCC62D",
	yellow800: "#FCC026",
	yellow900: "#FCB519",

	// Orange
	orange50: "#FFF5ED",
	orange100: "#FFF0E6",
	orange200: "#FFDABF",
	orange300: "#FFC195",
	orange400: "#FFA86B",
	orange500: "#FF832B",
	orange600: "#FF7B26",
	orange700: "#FF7020",
	orange800: "#FF661A",
	orange900: "#FF5310",

	// Red
	red50: "#FCEDEC",
	red100: "#FBE6E4",
	red200: "#F5C0BC",
	red300: "#EF9790",
	red400: "#EE5F54",
	red500: "#E43326",
	red600: "#DA291D",
	red700: "#CF2318",
	red800: "#C31F17",
	red900: "#B41710",

	//
	// SECONDARY
	//

	// Teal
	teal50: "#D3FCFE",
	teal100: "#C0FBFE",
	teal200: "#A9EFF2",
	teal300: "#73DFE7",
	teal400: "#47D5DF",
	teal500: "#0BC8D6",
	teal600: "#03C0CD",
	teal700: "#06B7C3",
	teal800: "#05AAB6",
	teal900: "#07A0AB",

	// Lime Green
	lime50: "#F1FAE6",
	lime100: "#EAF8DB",
	lime200: "#C5E1A5",
	lime300: "#AADC72",
	lime400: "#9CCC65",
	lime500: "#7FB800",
	lime600: "#76AF34",
	lime700: "#689F38",
	lime800: "#558B2F",
	lime900: "#487A34",

	// Purple
	purple50: "#EADEFF",
	purple100: "#E1D0FF",
	purple200: "#CFB4FF",
	purple300: "#C19EFF",
	purple400: "#AE82FC",
	purple500: "#7D4DD3",
	purple600: "#6938C0",
	purple700: "#592BAA",
	purple800: "#4D278F",
	purple900: "#4D0B8F",

	// Magenta
	magenta50: "#FFF3F9",
	magenta100: "#FFEEF7",
	magenta200: "#FFCDE4",
	magenta300: "#FFABD3",
	magenta400: "#FF8AC1",
	magenta500: "#FF479F",
	magenta600: "#F53693",
	magenta700: "#EE2A89",
	magenta800: "#D91F79",
	magenta900: "#CA136C",
};


/* ================================== *
 * ===== Style Variable Aliases ===== *
 * ================================== */
const aliases = {
	/* ----- Colors ----- */
	white: colors.gray0,
	gray: colors.gray500,
	grayBg: colors.gray50,
	primaryDarker: colors.primary9,
	primaryMain: colors.primary7,
	primary: colors.primary7,
	primaryBrand: colors.primary5,
	primaryLighter: colors.primary3,
	green: colors.green500,
	greenBg: colors.green50,
	blue: colors.blue500,
	blueBg: colors.blue50,
	yellow: colors.yellow500,
	yellowBg: colors.yellow50,
	red: colors.red500,
	redBg: colors.red50,
	teal: colors.teal500,
	tealBg: colors.teal50,
	lime: colors.lime500,
	limeBg: colors.lime50,
	purple: colors.purple500,
	purpleBg: colors.purple50,
	magenta: colors.magenta500,
	magentaBg: colors.magenta50,
  
	darkShadowColor: 'rgb(0 0 0 / 16%)',
	lightShadowColor: 'rgb(255 255 255 / 16%)',
  
	/* page and panel colors @2021-04-27 */
	formBg: '#f8fcff',
	formSectionBg: 'transparent',
	formPanelBg: colors.gray0,
	formSubsectionBg: colors.gray0,
  
	/* state colors @2021-04-27 */
	error: colors.red600,
	warning: colors.orange600,
	success: colors.green600,
  
	/* form colors @2021-04-27 */
	formActiveTab: colors.primary7,
	formPrimaryButtonBg: colors.primary7,
	formActivePanelIndicator: colors.primary7,
	formHeaderText: colors.black,
	formBodyText: colors.black,
	formInputText: colors.black,
	formPlaceholderText: colors.gray400,
	formLabel: colors.gray600,
	formFieldBorder: '#dedfe9',
}

export default {...colors, ...aliases};
