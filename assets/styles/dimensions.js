import { Dimensions } from "react-native";

export default {
	/* SCREEN */
	defaultPadding: 10,
	defaultInnerPadding: 5,
	defaultMargin: 10,
	defaultInnerMargin: 5,
	defaultBorderSize: 1,
	defaultBorderRadius: 5,
	defaultButtonBorderRadius: 10,
	defaultTitleFontSize: 18,
	defaultTitleContainerSize: 60,
	defaultBodyFontSize: 14,
	defaultFooterFontSize: 11,
	defaultRowItemSize: 180,
	defaultSmallRowItemSize: 90,
	defaultContainerWidth: "100%",
	defaultContainerHeight: "100%",
	defaultToolBarIconSize: 40,
	defaultToolBarIconColor: "white",
	/* CARD */
	cardPadding: 16,
	cardMargin: 6,
	cardRadius: 10,
	cardElevation: 2,
	cardShadowOffset: 2,
	/* BUTTON */
	buttonPadding: 6,
	buttonRadius: 6,
	//Thumbnails
	thumbnailSize: 90,
	thumbnailRadius: 45,
	// thumbnailBorderSize: 1, - Not working
	//Preview
	previewSize: Dimensions.get("window").width / 2,
	previewRadius: 10,
	// previewBorderSize: 1, - Not working
};
