import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { DrawerActions } from "react-navigation-drawer";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
// import { PRODUCTS } from "../data/products";
import { useSelector } from "react-redux";
import colors from "../assets/styles/colors";
import dimensions from "../assets/styles/dimensions";
import styles from "../assets/styles/generic";
import constants from "../data/constants";
import ProductList from "../shared/ProductListComponent";

// const categoryProducts = PRODUCTS.filter((product) => {
// 	return product.title.toLowerCase().includes("max");
// });

const FavoriteProductsScreen = (props) => {
	const favoriteProducts = useSelector((state) => state.allProducts.favoriteProducts);
	return (
		<View style={{ ...styles.container }}>
			{!!favoriteProducts.length > 0 ? (
				<Text style={{ ...styles.titleText, ...styles.underlinedContent, margin: dimensions.defaultMargin, color: colors.primaryTextColor }}>Your {favoriteProducts.length} Favorite Items!</Text>
			) : (
				<Text style={{ ...styles.titleText, margin: dimensions.defaultMargin, color: colors.primaryTextColor }}>No Favorite Items, Yet!</Text>
			)}

			<ProductList dataList={favoriteProducts} navigation={props.navigation}></ProductList>
		</View>
	);
};

const styleSheet = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: "center",
		alignContent: "center",
	},
});

FavoriteProductsScreen.navigationOptions = (props) => ({
	headerTitle: constants.__FAVORITES_TITLE__,
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

export default FavoriteProductsScreen;
