import { LibreBaskerville_400Regular, LibreBaskerville_400Regular_Italic, LibreBaskerville_700Bold, useFonts } from "@expo-google-fonts/libre-baskerville";
import { Montserrat_400Regular, Montserrat_600SemiBold } from "@expo-google-fonts/montserrat";
import AppLoading from "expo-app-loading";
import React from "react";
import { LogBox } from "react-native";
import { enableScreens } from "react-native-screens";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import productReducer from "./data/store/reducers/productReducer";
import AppNavigator from "./navigation/navigator";

LogBox.ignoreAllLogs(); // to suppress all sort of warnings on the simulators

const mainReducer = combineReducers({
	allProducts: productReducer,
});

const store = createStore(mainReducer);

export default function App() {
	let [fontsLoaded] = useFonts({
		LibreBaskerville_400Regular,
		LibreBaskerville_400Regular_Italic,
		LibreBaskerville_700Bold,
		Montserrat_400Regular,
		Montserrat_600SemiBold,
	});

	enableScreens(); // enhancement

	if (!fontsLoaded) {
		return <AppLoading />;
	} else {
		return (
			<Provider store={store}>
				<AppNavigator />
			</Provider>
		);
	}
}
