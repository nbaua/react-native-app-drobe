import { StyleSheet } from "react-native";
import constants from "./../../data/constants";
import colors from "./colors";
import dimensions from "./dimensions";

export default StyleSheet.create({
	wrapper: {
		width: "100%",
	},
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
		marginLeft: dimensions.defaultInnerMargin,
		marginRight: dimensions.defaultInnerMargin,
	},
	welcome: {
		textAlign: "center",
		fontFamily: constants.__SECONDARY_REGULAR_FONT__,
		fontSize: dimensions.defaultTitleFontSize,
	},
	titleText: {
		fontFamily: constants.__SECONDARY_REGULAR_FONT__,
		fontSize: dimensions.defaultTitleFontSize,
		textAlign: "center",
	},
	buttonText: {
		fontFamily: constants.__SECONDARY_REGULAR_FONT__,
		fontSize: dimensions.defaultBodyFontSize,
	},
	cardText: {
		fontFamily: constants.__PRIMARY_REGULAR_FONT__,
		fontSize: dimensions.defaultBodyFontSize,
	},
	categoryHeader: {
		fontFamily: constants.__PRIMARY_REGULAR_FONT__,
		fontSize: dimensions.defaultTitleFontSize,
	},
	flexAlign: { textAlign: "center", flex: 1, margin: dimensions.defaultInnerMargin },

	leftToolBarIcon: {
		backgroundColor: colors.primaryLightColor,
		borderRadius: dimensions.defaultToolBarIconSize,
		padding: 0,
		marginLeft: dimensions.defaultInnerMargin,
		width: dimensions.defaultToolBarIconSize,
		height: dimensions.defaultToolBarIconSize,
	},
	rightToolBarIcon: {
		backgroundColor: colors.primaryLightColor,
		borderRadius: dimensions.defaultToolBarIconSize,
		padding: 0,
		marginRight: dimensions.defaultInnerMargin,
		width: dimensions.defaultToolBarIconSize,
		height: dimensions.defaultToolBarIconSize,
	},
	underlinedContent: {
		borderColor: colors.primaryDarkColor,
		borderWidth: 0,
		borderBottomWidth: 2,
	},
});
