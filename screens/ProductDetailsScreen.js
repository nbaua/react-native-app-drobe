import React, { useCallback, useEffect } from "react";
import { AlertIOS, Platform, ScrollView, Text, ToastAndroid, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useDispatch, useSelector } from "react-redux";
import dimensions from "../assets/styles/dimensions";
import styles from "../assets/styles/generic";
import ProductDetailView from "../shared/ProductDetailViewComponent";
import { toggleFavoriteAction } from "./../data/store/actions/productAction";

const ProductDetailsScreen = (props) => {
	const product = props.navigation.getParam("productDetails");
	const isFavoriteProduct = useSelector((state) => state.allProducts.favoriteProducts.some((p) => p.id === product.id));

	const dispatch = useDispatch();
	const toggleFavoriteHandler = useCallback(() => {
		dispatch(toggleFavoriteAction(product.id));
	}, [dispatch, product]);

	useEffect(() => {
		props.navigation.setParams({
			toggleFavorite: toggleFavoriteHandler,
		});
		props.navigation.setParams({
			isFav: isFavoriteProduct,
		});
		showNotification(isFavoriteProduct);
	}, [toggleFavoriteHandler, isFavoriteProduct]);

	const showNotification = (isFavoriteProduct) => {
		const message = isFavoriteProduct ? "Added Successfully" : "Removed Successfully";
		if (Platform.OS === "android") {
			ToastAndroid.show(message, ToastAndroid.SHORT);
		} else {
			AlertIOS.alert(message);
		}
	};

	return (
		<ScrollView>
			<View
				style={{
					flex: 1,
					justifyContent: "center",
					alignContent: "center",
					marginTop: dimensions.defaultMargin,
					paddingBottom: dimensions.defaultMargin * 2,
				}}
			>
				<ProductDetailView key={product.sku} item={product}></ProductDetailView>
			</View>
		</ScrollView>
	);
};

ProductDetailsScreen.navigationOptions = (props) => {
	const toggleFavorite = props.navigation.getParam("toggleFavorite");
	const isFavorite = props.navigation.getParam("isFav");

	return {
		headerTitle: () => (
			<View>
				<Text>{props.navigation.getParam("productTitle")}</Text>
				{/* <Text>({props.navigation.getParam("productTitle")})</Text> --- ** use this for double line title ** }*/}
			</View>
		),
		// headerTitle: props.navigation.getParam("productCode"), // uncomment this to have a unwrapped and truncated long title.

		// HeaderButtonComponent={ToolBarButton} --- <HeaderButtons> can not use this for now, fallback is working nicely
		headerRight: () => {
			return isFavorite ? (
				<HeaderButtons>
					<Item
						title="&#10084;" // &#10084; = red heart -- &#128420; = black heart -- // ❤
						iconName="heart"
						onPress={toggleFavorite}
						style={styles.rightToolBarIcon}
					/>
				</HeaderButtons>
			) : (
				<HeaderButtons>
					<Item
						title="&#128420;" // &#10084; = red heart -- &#128420; = black heart -- // ❤
						iconName="heart"
						onPress={toggleFavorite}
						style={styles.rightToolBarIcon}
					/>
				</HeaderButtons>
			);
		},
	};
};

export default ProductDetailsScreen;
