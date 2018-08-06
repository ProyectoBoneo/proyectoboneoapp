export const RETRIEVE_COMUNICADOS_SUCCESS = 'RETRIEVE_COMUNICADOS_SUCCESS';
export const READ_COMUNICADO = 'READ_COMUNICADO';


const retrieveComunicadosSuccess = (comunicados) => {
    return {
        type: RETRIEVE_COMUNICADOS_SUCCESS,
        comunicados,
    }
};

export const retrieveComunicados = () => {
    return (dispatch, getState, {api}) => {
        return api.get('/comunicados/').then(
            response => dispatch(retrieveComunicadosSuccess(response.data))
        )
    }
};