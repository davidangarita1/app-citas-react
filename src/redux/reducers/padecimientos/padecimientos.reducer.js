import actionTypes from "./padecimientos.actionTypes";
import initialState from "./padecimientos.initialStates";

const padecimientosReducer = (state = initialState, {type, payload}) => {
	switch (type) {
		case actionTypes.PADECIMIENTOS_LOAD_START:
			return {
				...state,
				isLoading: true,
				padecimiento: null,
				errorMessage: null,
			};
		case actionTypes.PADECIMIENTOS_LOAD_SUCCESS:
			return {
				...state,
				isLoading: false,
				padecimiento: payload,
			};
		case actionTypes.PADECIMIENTOS_LOAD_ERROR:
			return {
				...state,
				isLoading: false,
				errorMessage: payload,
			};
		default:
			return state;
	}
};

export default padecimientosReducer;