export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";
export const PRODUCT_FILTERS = "PRODUCT_FILTERS";

export const toggleFavoriteAction = (id) => {
	return { type: TOGGLE_FAVORITE, id: id };
};

export const setFiltersAction = (filterSettings) => {
	return { type: PRODUCT_FILTERS, filters: filterSettings };
};
