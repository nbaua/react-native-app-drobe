import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Platform } from "react-native";
import { HeaderButton, HeaderButtons } from "react-navigation-header-buttons";
import colors from "../assets/styles/colors";
import dimensions from "../assets/styles/dimensions";
// import { HeaderButtons, Item } from "react-navigation-header-buttons";

const ToolBarButton = (props) => {
	return <HeaderButton {...props} iconSize={dimensions.defaultToolBarIconSize} IconComponent={Ionicons} color={Platform === "android" ? colors.defaultToolBarIconColor : colors.primaryColor} />;
};
export const CustomToolBarButtons = (props) => {
	return <HeaderButtons HeaderButtonComponent={ToolBarButton} {...props} />;
};

// export default ToolBarButton;
export { Item } from "react-navigation-header-buttons";

// to-do - fix the expo-vector issue
// This component is not working as expected and hence not being used, using fallback which is working nicely.
