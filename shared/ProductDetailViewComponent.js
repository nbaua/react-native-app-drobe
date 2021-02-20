import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import colors from "../assets/styles/colors";
import dimensions from "../assets/styles/dimensions";
import constants from "../data/constants";
import TagView from "./../shared/TagViewComponent";

const ProductDetailView = (props) => {
	return (
		<View style={styles.productItem}>
			<View style={{ flexDirection: "row" }}>
				<Image style={styles.previewImage} source={{ uri: props.item.image_url }} />
				<Image style={styles.previewImage} source={{ uri: props.item.ss_image_url }} />
			</View>
			<View style={{ ...styles.productHeader }}>
				<View style={{ ...styles.productTitleCover, flex: 1, flexDirection: "column" }}>
					<Text style={styles.productTitle} numberOfLines={2}>
						{props.item.title}
					</Text>
					<View style={{ flex: 1, flexDirection: "column" }}>
						<Text style={styles.productDetail}>PRICE: ₹ {props.item.price * constants.__PRODUCT_PRICE_CONVERSION_VALUE__}</Text>
						<Text style={styles.productDetail}>SKU: {props.item.sku}</Text>
					</View>
				</View>
			</View>
			<View style={styles.productBody}>
				<Text style={styles.productDetail}>Available Sizes: </Text>
				<TagView
					tags={props.item.sizes?.sort(function (a, b) {
						return a - b;
					})}
				></TagView>
			</View>
			<View style={{ ...styles.productBody, height: "35%" }}>
				<Text style={styles.productTitle}>Product Description: </Text>
				<Text style={styles.productDetail}>{constants.__PRODUCT_DESCRIPTION__}</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	previewImage: {
		flex: 2,
		height: dimensions.previewSize,

		resizeMode: "contain",
		// borderWidth: dimensions.defaultBorderSize, // not working
		borderColor: colors.primaryDarkColor, // so does this
		borderRadius: dimensions.previewRadius,
		marginTop: dimensions.defaultMargin / 2,
		marginBottom: dimensions.defaultMargin * 2,
	},

	productItem: {
		margin: dimensions.defaultMargin,
	},
	productHeader: {
		height: "15%",
		borderWidth: dimensions.defaultBorderSize,
		borderTopColor: colors.border25,
		borderLeftColor: colors.border25,
		borderRightColor: colors.border25,
		borderBottomColor: colors.borderZero,
		flexDirection: "row",
	},
	productTitleCover: {
		padding: dimensions.defaultPadding,
		flexDirection: "row",
	},
	productTitle: {
		fontFamily: constants.__PRIMARY_BOLD_FONT__,
		fontSize: dimensions.defaultTitleFontSize,
		minHeight: dimensions.defaultTitleHeaderSize,
		color: colors.alternateDarkColor,
	},
	productBody: {
		height: "10%",
		padding: dimensions.defaultInnerPadding,
		justifyContent: "flex-start",
		borderWidth: 1,
		borderTopColor: colors.borderZero,
		borderLeftColor: colors.border25,
		borderRightColor: colors.border25,
		borderBottomColor: colors.border25,
	},
	productDetail: {
		fontFamily: constants.__SECONDARY_BOLD_FONT__,
		fontSize: dimensions.defaultBodyFontSize,
		color: colors.primaryTextColor,
		paddingLeft: dimensions.defaultInnerPadding,
	},
	productRowItem: {
		flexDirection: "row",
	},
	productImage: {
		width: dimensions.defaultContainerWidth,
		height: dimensions.defaultContainerHeight,
		flex: 1,
		resizeMode: "contain",
		justifyContent: "flex-end",
	},
	productCaption: {},
});

export default ProductDetailView;
