import { retrieveComunicados } from 'app/actions/comunicados';
import { retrievePerfilAcademico } from 'app/actions/perfilAcademico';

const USER_DATA_REFRESH_SUCCESS = 'DATA_REFRESH_SUCCESS';

const userDataRefreshSuccess = () => {
    return {
        type: USER_DATA_REFRESH_SUCCESS,
    }
};

/**
 * This action is used to globally refresh the real time user data
 */
export const userDataRefresh = () => {
    return (dispatch) => {
        Promise.all([
            dispatch(retrieveComunicados()),
            dispatch(retrievePerfilAcademico()),
        ]).then(
            dispatch(userDataRefreshSuccess())
        );
    };
};