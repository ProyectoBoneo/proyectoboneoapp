import {MARK_AS_READ_COMUNICADO_SUCCESS} from "./comunicados";

export const RETRIEVE_PERFIL_ACADEMICO_SUCCESS = 'RETRIEVE_PERFIL_ACADEMICO_SUCCESS';
export const MARK_AS_NOTIFIED_RESULTADO_EVALUACION_SUCCESS = 'MARK_AS_NOTIFIED_RESULTADO_EVALUACION_SUCCESS';


const retrievePerfilAcademicoSuccess = (perfilAcademico) => {
    return {
        type: RETRIEVE_PERFIL_ACADEMICO_SUCCESS,
        perfilAcademico,
    }
};

const markAsNotifiedResultadoEvaluacionSuccess = (resultadoEvaluacion) => {
    return {
        type: MARK_AS_NOTIFIED_RESULTADO_EVALUACION_SUCCESS,
        resultadoEvaluacion,
    }
};


export const markAsNotified = (resultadoEvaluacion) => {
    return (dispatch, getState, {api}) => {
        return api.post(`/resultados_evaluaciones/${ resultadoEvaluacion.id }/mark_as_notified/`).then(
            response => dispatch(markAsNotifiedResultadoEvaluacionSuccess(response.data))
        )
    }
};


export const retrievePerfilAcademico = () => {
    return (dispatch, getState, {api}) => {
        return api.get('/perfil_academico/').then(
            response => dispatch(retrievePerfilAcademicoSuccess(response.data))
        )
    }
};
