import { Platform } from "react-native";
import "react-native-gesture-handler";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import colors from "../assets/styles/colors";
import dimensions from "../assets/styles/dimensions";
import constants from "../data/constants";
import CategoriesScreen from "../screens/CategoriesScreen";
import FavoriteProductsScreen from "../screens/FavoriteProductsScreen";
import FiltersScreen from "../screens/FiltersScreen";
import ProductDetailsScreen from "./../screens/ProductDetailsScreen";
import ProductsScreen from "./../screens/ProductsScreen";

const navigationOptions = {
	headerStyle: {
		backgroundColor: Platform.OS === "android" ? colors.primaryColor : "",
	},
	headerTintColor: colors.primaryTextColor,
};

const stylingOptions = {
	activeTintColor: colors.primaryTextColor,
	inactiveTintColor: colors.alternateTextColor,
	activeBackgroundColor: colors.primaryColor,
	inactiveBackgroundColor: colors.primaryLightColor,
	labelStyle: {
		marginBottom: dimensions.defaultMargin,
		fontFamily: constants.__SECONDARY_BOLD_FONT__,
		fontSize: dimensions.defaultBodyFontSize,
	},
};

// All Products Route
const AppNavigator = createStackNavigator(
	{
		Categories: { screen: CategoriesScreen },
		FavoriteProducts: { screen: FavoriteProductsScreen },
		Filter: { screen: FiltersScreen },
		ProductDetails: { screen: ProductDetailsScreen },
		Products: { screen: ProductsScreen },
	},
	{
		initialRouteName: "Categories",
		defaultNavigationOptions: navigationOptions,
	}
);

// Favorite Products Route
const FavoritesNavigator = createStackNavigator(
	{
		FavoriteProducts: { screen: FavoriteProductsScreen },
		ProductDetails: { screen: ProductDetailsScreen },
	},
	{
		initialRouteName: "FavoriteProducts",
		defaultNavigationOptions: navigationOptions,
	}
);

// Combines Above Routes
const AppBottomNavigator = createBottomTabNavigator(
	{
		Total: {
			screen: AppNavigator,
			navigationOptions: {
				tabBarLabel: "All Categories",
			},
		},
		Loved: {
			screen: FavoritesNavigator,
			navigationOptions: {
				tabBarLabel: "Your Wardrobe",
			},
		},
	},
	{
		tabBarOptions: stylingOptions,
	}
);

// Favorite Products Route
const FiltersNavigator = createStackNavigator(
	{
		FilteredProducts: { screen: FiltersScreen },
		// FavoriteProducts: { screen: FavoriteProductsScreen },
	},
	{
		defaultNavigationOptions: navigationOptions,
	}
);

const sideBarNavigator = createDrawerNavigator(
	{
		MainApp: {
			screen: AppBottomNavigator,
			navigationOptions: {
				drawerLabel: "All Categories",
			},
		},
		Extras: {
			screen: FiltersNavigator,
			navigationOptions: {
				drawerLabel: "Product Filters",
			},
		},
	},
	{
		contentOptions: stylingOptions,
	}
);

export default createAppContainer(sideBarNavigator);
