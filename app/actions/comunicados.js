export const RETRIEVE_COMUNICADOS_SUCCESS = 'RETRIEVE_COMUNICADOS_SUCCESS';
export const MARK_AS_READ_COMUNICADO_SUCCESS = 'MARK_AS_READ_COMUNICADO_SUCCESS';


const retrieveComunicadosSuccess = (comunicados) => {
    return {
        type: RETRIEVE_COMUNICADOS_SUCCESS,
        comunicados,
    }
};

const markAsReadComunicadosSuccess = (comunicado) => {
    return {
        type: MARK_AS_READ_COMUNICADO_SUCCESS,
        comunicado,
    }
};

export const retrieveComunicados = () => {
    return (dispatch, getState, {api}) => {
        return api.get('/comunicados/').then(
            response => dispatch(retrieveComunicadosSuccess(response.data))
        )
    }
};

export const markAsRead = (comunicado) => {
    return (dispatch, getState, {api}) => {
        return api.post(`/comunicados/${ comunicado.id }/mark_as_read/`).then(
            response => dispatch(markAsReadComunicadosSuccess(response.data))
        )
    }
};