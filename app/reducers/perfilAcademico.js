import { RETRIEVE_PERFIL_ACADEMICO_SUCCESS } from 'app/actions/perfilAcademico';

const initialState = {
    perfilAcademico: [],
};

export default function(state = initialState, action) {
    switch (action.type) {
        case RETRIEVE_PERFIL_ACADEMICO_SUCCESS:
            return {
                ...state,
                perfilAcademico: action.perfilAcademico
            };
    }
    return state;
};
