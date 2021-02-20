import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../assets/styles/colors";
import dimensions from "../assets/styles/dimensions";

const CardView = (props) => {
	return (
		<View style={styles.cardLayout}>
			<View style={styles.cardContent}>{props.children}</View>
		</View>
	);
};

const styles = StyleSheet.create({
	cardLayout: {
		elevation: dimensions.cardElevation,
		marginHorizontal: dimensions.cardMargin,
		marginVertical: dimensions.cardMargin,
	},
	cardContent: {
		alignContent: "center",
		borderWidth: dimensions.defaultBorderSize + 1,
		borderColor: colors.border25,
		borderRadius: dimensions.cardRadius,
		overflow: "hidden",
	},
});

export default CardView;
