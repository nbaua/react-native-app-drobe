import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../assets/styles/colors";
import dimensions from "../assets/styles/dimensions";
import constants from "../data/constants";

const TagView = (props) => {
	const renderTags = () => {
		return props.tags?.map((tag, index) => <Text style={{ ...tagStyles.tagTitle }}>{tag}</Text>);
	};

	return <View style={tagStyles.container}>{renderTags()}</View>;
};

const tagStyles = StyleSheet.create({
	container: {
		flexDirection: "row",
		padding: dimensions.defaultInnerPadding,
		height: dimensions.defaultContainerHeight,
		alignSelf: "baseline",
	},
	tagTitle: {
		fontFamily: constants.__SECONDARY_BOLD_FONT__,
		flexDirection: "row",
		height: dimensions.defaultTitleContainerSize / 2,
		minWidth: dimensions.defaultTitleContainerSize / 2,
		fontSize: dimensions.defaultFooterFontSize,
		textAlign: "center",
		backgroundColor: colors.primaryColor,
		marginRight: dimensions.defaultInnerMargin,
		marginBottom: dimensions.defaultInnerMargin,
		padding: dimensions.defaultInnerPadding,
		color: colors.primaryTextColor,
		borderRadius: dimensions.defaultBorderRadius,
		borderWidth: 1,
		borderColor: colors.alternateDarkColor,
		// transform: [{ rotate: "90deg" }],
	},
});

export default TagView;
