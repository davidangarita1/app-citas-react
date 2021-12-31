import { combineReducers } from 'redux';
import citasReducer from './citas/citas.reducer';

const rootReducer = () =>
	combineReducers({
		citas: citasReducer,
	});

export default rootReducer;