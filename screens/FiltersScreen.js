import React, { useCallback, useEffect, useState } from "react";
import { Platform, ScrollView, StyleSheet, Switch, Text, View } from "react-native";
import { DrawerActions } from "react-navigation-drawer";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useDispatch } from "react-redux";
import colors from "../assets/styles/colors";
import dimensions from "../assets/styles/dimensions";
import styles from "../assets/styles/generic";
import constants from "../data/constants";
import { setFiltersAction } from "./../data/store/actions/productAction";

const SettingsItem = (item) => {
	return (
		<View
			style={{
				...styleSheet.rowItem,
			}}
		>
			<View style={{ flex: 1, flexGrow: dimensions.defaultPadding, alignItems: "flex-start", margin: dimensions.defaultMargin, padding: dimensions.defaultPadding }}>
				<Text style={{ ...styles.titleText }}>{item.settingLabel} </Text>
			</View>
			<View style={{ flex: 1, alignItems: "flex-end", margin: dimensions.defaultMargin, padding: dimensions.defaultPadding }}>
				<Switch trackColor={{ true: colors.alternateTextColor }} thumbColor={Platform.OS === "android" ? colors.alternateDarkColor : ""} value={item.state} onValueChange={item.stateChange} />
			</View>
		</View>
	);
};

const FiltersScreen = (props) => {
	const { navigation } = props;

	const [showSwimwear, setShowSwimwear] = useState(false);
	const [showHighValue, setShowHighValue] = useState(true);
	const dispatch = useDispatch();

	const saveFilterState = useCallback(() => {
		const filters = { displaySwimwear: showSwimwear, hideHVProducts: showHighValue };
		dispatch(setFiltersAction(filters));
	}, [showSwimwear, showHighValue, dispatch]);

	useEffect(() => {
		navigation.setParams({ savedFilters: saveFilterState });
	}, [saveFilterState]);

	return (
		<ScrollView style={{ ...styleSheet.screen }}>
			<SettingsItem settingLabel="Show Swimwear" stateChange={(newValue) => setShowSwimwear(newValue)} state={showSwimwear}></SettingsItem>
			<SettingsItem settingLabel="Hide High Price Item" stateChange={(newValue) => setShowHighValue(newValue)} state={showHighValue}></SettingsItem>
		</ScrollView>
	);
};

const styleSheet = StyleSheet.create({
	screen: {
		flex: 1,
		alignContent: "flex-start",
		height: dimensions.defaultContainerHeight,
	},
	rowItem: {
		flex: 1,
		flexDirection: "row",
		height: dimensions.defaultTitleContainerSize,
		borderWidth: dimensions.defaultBorderSize,
		borderTopColor: colors.borderZero,
		borderLeftColor: colors.borderZero,
		borderRightColor: colors.borderZero,
		borderBottomColor: colors.border25,
	},
});

FiltersScreen.navigationOptions = (props) => ({
	headerTitle: constants.__FILTERS_TITLE__,
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
	headerRight: () => (
		<HeaderButtons>
			<Item
				title="&#10004;" // ✔
				iconName="menu-check"
				onPress={() => {
					props.navigation.getParam("savedFilters");
					props.navigation.navigate({
						routeName: "Categories",
					});
				}}
				style={styles.rightToolBarIcon}
			/>
		</HeaderButtons>
	),
});

export default FiltersScreen;
