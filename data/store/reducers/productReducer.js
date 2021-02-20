import constants from "../../../data/constants";
import { PRODUCTS } from "../../../data/products";
import { PRODUCT_FILTERS, TOGGLE_FAVORITE } from "../actions/productAction";

const initialState = {
	totalProducts: PRODUCTS,
	filteredProducts: PRODUCTS,
	favoriteProducts: [],
};

const productReducer = (state = initialState, action) => {
	switch (action.type) {
		case TOGGLE_FAVORITE:
			const existingFavoriteProductIndex = state.favoriteProducts.findIndex((product) => product.id === action.id);
			if (existingFavoriteProductIndex >= 0) {
				const updatedFavoriteProducts = [...state.favoriteProducts];
				updatedFavoriteProducts.splice(existingFavoriteProductIndex, 1);
				return { ...state, favoriteProducts: updatedFavoriteProducts };
			} else {
				const existingProduct = state.totalProducts[state.totalProducts.findIndex((product) => product.id === action.id)];
				return { ...state, favoriteProducts: state.favoriteProducts.concat(existingProduct) };
			}
		case PRODUCT_FILTERS:
			const appliedFilers = action.filters;
			const updatedFilteredProducts = state.totalProducts.filter((product) => {
				if (appliedFilers.hideHVProducts === true && product.price * constants.__PRODUCT_PRICE_CONVERSION_VALUE__ >= constants.__PRODUCT_HIGH_VALUE_MARK__) {
					return false;
				}
				if (appliedFilers.displaySwimwear === false && product.category.toLowerCase() === "swimwear") {
					return false;
				}
				return true;
			});
			return { ...state, filteredProducts: updatedFilteredProducts };
			break;

		default:
			return state;
	}

	// return state;
};

export default productReducer;
