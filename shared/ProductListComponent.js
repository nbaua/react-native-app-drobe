import React from "react";
import { FlatList } from "react-native";
import styles from "../assets/styles/generic";
import ProductView from "../shared/ProductViewComponent";

const ProductList = (props) => {
	const renderProductItem = (itemData) => {
		return (
			<ProductView
				key={itemData.item.sku}
				item={itemData.item}
				onSelectedItem={(item) => {
					props.navigation.navigate({
						routeName: "ProductDetails",
						params: {
							productTitle: itemData.item.title,
							productCode: itemData.item.sku,
							productDetails: itemData.item,
						},
					});
				}}
			></ProductView>
		);
	};

	return (
		<FlatList
			style={styles.wrapper}
			data={props.dataList}
			keyExtractor={(item, index) => {
				index + item.sku;
			}}
			initialNumToRender={5}
			renderItem={renderProductItem}
		/>
	);
};

export default ProductList;
