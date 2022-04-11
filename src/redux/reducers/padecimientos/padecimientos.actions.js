import actionTypes from './padecimientos.actionTypes';

const padecimientosLoadStart = () => ({
	type: actionTypes.PADECIMIENTOS_LOAD_START,
});

const padecimientosLoadSuccess = (padecimiento) => ({
	type: actionTypes.PADECIMIENTOS_LOAD_SUCCESS,
	payload: padecimiento,
});

const padecimientosLoadError = (errorMessage) => ({
	type: actionTypes.PADECIMIENTOS_LOAD_ERROR,
	payload: errorMessage,
});

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	padecimientosLoadStart,
	padecimientosLoadSuccess,
	padecimientosLoadError,
};