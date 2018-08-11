import {
    RETRIEVE_PERFIL_ACADEMICO_SUCCESS,
    MARK_AS_NOTIFIED_RESULTADO_EVALUACION_SUCCESS,
} from 'app/actions/perfilAcademico';

const initialState = {
    perfilAcademico: [],
    unreadUpdatesCount: 0,
};

const processPerfilMateria = (perfilMateria) => {
    perfilMateria['unreadUpdatesCount'] = perfilMateria.evaluaciones.filter(
        (evaluacion) => !evaluacion.fecha_notificado).length;
    return perfilMateria;
};

const processPerfilAcademico = (perfilAcademico) => perfilAcademico.map(processPerfilMateria);

const getUnreadUpdatesCount = (processedPerfilAcademico) => processedPerfilAcademico
    .map((perfilMateria) => perfilMateria.unreadUpdatesCount)
    .reduce((acc, value) => acc + value, 0);

export default function(state = initialState, action) {
    let processedPerfilAcademico;
    switch (action.type) {

        case RETRIEVE_PERFIL_ACADEMICO_SUCCESS:
            processedPerfilAcademico = processPerfilAcademico(action.perfilAcademico);
            return {
                ...state,
                perfilAcademico: processedPerfilAcademico,
                unreadUpdatesCount: getUnreadUpdatesCount(processedPerfilAcademico),
            };
        case MARK_AS_NOTIFIED_RESULTADO_EVALUACION_SUCCESS:
            state.perfilAcademico.forEach(
                (perfilMateria) => {
                    perfilMateria.evaluaciones.forEach(
                        (resultadoEvaluacion) => {
                            if (resultadoEvaluacion.id === action.resultadoEvaluacion.id) {
                                resultadoEvaluacion.fecha_notificado = action.resultadoEvaluacion.fecha_notificado;
                            }
                        }
                    )
                }
            );
            processedPerfilAcademico = processPerfilAcademico(state.perfilAcademico);
            return {
                ...state,
                perfilAcademico: processedPerfilAcademico,
                unreadUpdatesCount: getUnreadUpdatesCount(processedPerfilAcademico),
            };
    }
    return state;
};
