export const RETRIEVE_PERFIL_ACADEMICO_SUCCESS = 'RETRIEVE_PERFIL_ACADEMICO_SUCCESS';


const retrievePerfilAcademicoSuccess = (perfilAcademico) => {
    return {
        type: RETRIEVE_PERFIL_ACADEMICO_SUCCESS,
        perfilAcademico,
    }
};


export const retrievePerfilAcademico = () => {
    return (dispatch, getState, {api}) => {
        return api.get('/perfil_academico/').then(
            response => dispatch(retrievePerfilAcademicoSuccess(response.data))
        )
    }
};
