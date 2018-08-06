import {RETRIEVE_COMUNICADOS_SUCCESS} from 'app/actions/comunicados';

const initialState = {
    comunicados: [],
};

export default function(state = initialState, action) {
    switch (action.type) {
        case RETRIEVE_COMUNICADOS_SUCCESS:
            return {
                ...state,
                comunicados: action.comunicados
            };
    }
    return state;
};
