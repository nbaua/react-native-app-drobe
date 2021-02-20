import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { DrawerActions } from "react-navigation-drawer";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import colors from "../assets/styles/colors";
import dimensions from "../assets/styles/dimensions";
import styles from "../assets/styles/generic";
import { CATEGORIES } from "../data/categories";
import constants from "../data/constants";
import CardView from "../shared/CardViewComponent";

const CategoriesScreen = (props) => {
	return (
		<FlatList
			keyExtractor={(item, index) => item.id}
			data={CATEGORIES}
			numColumns={2}
			renderItem={(data) => {
				return (
					<View style={styles.flexAlign}>
						<TouchableOpacity
							style={styles.categoryHeader}
							onPress={() => {
								props.navigation.navigate({
									routeName: "Products",
									params: {
										categorySlug: data.item.slug,
										categoryTitle: data.item.title,
									},
								});
							}}
						>
							<CardView>
								<ImageBackground source={{ uri: data.item.image }} style={add_styles.image}>
									<View style={{ ...add_styles.titleCover }}>
										<Text style={add_styles.title}>{data.item.title}</Text>
									</View>
								</ImageBackground>
							</CardView>
						</TouchableOpacity>
					</View>
				);
			}}
		/>
	);
};

const add_styles = StyleSheet.create({
	image: {
		resizeMode: "contain",
		width: dimensions.defaultContainerWidth,
	},

	titleCover: {
		width: dimensions.defaultContainerWidth,
		maxWidth: dimensions.defaultRowItemSize,
		height: dimensions.defaultRowItemSize + 100, // gain
		maxHeight: dimensions.defaultRowItemSize + 100, // gain
		flex: 1,
		justifyContent: "flex-end",
	},
	title: {
		flex: 1,
		fontFamily: constants.__PRIMARY_REGULAR_FONT__,
		fontSize: dimensions.defaultTitleFontSize + 6, // gain
		color: colors.primaryColor,
		width: dimensions.defaultContainerWidth,
		height: dimensions.defaultTitleContainerSize,
		maxHeight: dimensions.defaultTitleContainerSize + 12, // gain * 2
		textAlignVertical: "bottom",
		textAlign: "right",
		backgroundColor: colors.border75,
		paddingRight: dimensions.defaultInnerPadding,
		paddingBottom: dimensions.defaultInnerPadding,
	},
});

CategoriesScreen.navigationOptions = (props) => ({
	headerTitle: constants.__CATEGORY_TITLE__,
	headerLeft: () => (
		<HeaderButtons>
			<Item
				title="&#9776;" // ☰
				iconName="menu-outline"
				onPress={() => {
					props.navigation.dispatch(DrawerActions.toggleDrawer());
				}}
				style={styles.leftToolBarIcon}
			/>
		</HeaderButtons>
	),
});

// gain - additional factor of height-width-size added for better ui experience

export default CategoriesScreen;
