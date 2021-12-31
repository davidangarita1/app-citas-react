import CitasService from '../../../services/citas.service';
import actions from './citas.actions';

export const loadCitasAsync = (dispatch) => {
		dispatch(actions.citasLoadStart());

		CitasService.getAllCitas()
		.then((response) => dispatch(actions.citasLoadSuccess(response.data)))
		.catch((error) => dispatch(actions.citasLoadError(error.message)));
};