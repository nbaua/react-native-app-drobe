import React from "react";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import dimensions from "../assets/styles/dimensions";
import styles from "../assets/styles/generic";
// import { PRODUCTS } from "../data/products";
import ProductList from "../shared/ProductListComponent";

const ProductsScreen = (props) => {
	const categorySlug = props.navigation.getParam("categorySlug");
	const categoryTitle = props.navigation.getParam("categoryTitle");

	const availableProducts = useSelector((state) => state.allProducts.filteredProducts);

	const categoryProducts = availableProducts.filter((product) => {
		return product.slug === categorySlug;
	});

	return (
		<View style={styles.container}>
			<Text style={{ ...styles.titleText, ...styles.underlinedContent, margin: dimensions.defaultMargin }}>
				Displaying {categoryProducts.length} {categoryTitle}!
			</Text>
			<ProductList dataList={categoryProducts} navigation={props.navigation}></ProductList>
		</View>
	);
};

ProductsScreen.navigationOptions = (props) => ({
	headerTitle: props.navigation.getParam("categoryTitle"),
});

export default ProductsScreen;
