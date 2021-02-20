import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "../assets/styles/colors";
import dimensions from "../assets/styles/dimensions";
import constants from "../data/constants";
import TagView from "./../shared/TagViewComponent";

const ProductView = (props) => {
	const [showPrimaryImage, setShowPrimaryImage] = useState(true);
	const changeImage = () => {
		setShowPrimaryImage(!showPrimaryImage);
	};

	return (
		<View style={styles.productItem}>
			<TouchableOpacity onPress={props.onSelectedItem}>
				<View style={{ ...styles.productHeader }}>
					<TouchableOpacity onPress={changeImage}>
						<Image style={styles.previewImage} source={showPrimaryImage === false ? { uri: props.item.ss_image_url } : { uri: props.item.image_url }} />
					</TouchableOpacity>
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
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	previewImage: {
		height: dimensions.thumbnailSize,
		width: dimensions.thumbnailSize,
		resizeMode: "contain",
		borderRadius: dimensions.thumbnailRadius,
		marginTop: "15%",
		marginBottom: "30%",
	},

	productItem: {
		height: dimensions.defaultRowItemSize,
		maxHeight: dimensions.defaultRowItemSize,
		overflow: "hidden",
		margin: dimensions.defaultMargin,
	},
	productHeader: {
		height: "60%",
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
		height: "40%",
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

export default ProductView;
