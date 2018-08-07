import moment from 'moment';

import {RETRIEVE_COMUNICADOS_SUCCESS} from 'app/actions/comunicados';
import {MARK_AS_READ_COMUNICADO_SUCCESS} from "../actions/comunicados";

const initialState = {
    comunicados: [],
};

const processComunicadosRecibidos = (comunicados) => {
    return comunicados.sort((a, b) => a.comunicado.fecha > b.comunicado.fecha ? -1 : 1).map(processComunicadoRecibido)
};

const processComunicadoRecibido = (comunicadoRecibido) => {
    comunicadoRecibido.comunicado.fecha = moment(new Date(comunicadoRecibido.comunicado.fecha)).format('DD/MM/YYYY h:mm');
    return comunicadoRecibido;
};

export default function(state = initialState, action) {
    switch (action.type) {
        case RETRIEVE_COMUNICADOS_SUCCESS:
            return {
                ...state,
                comunicados: processComunicadosRecibidos(action.comunicados)
            };
        case MARK_AS_READ_COMUNICADO_SUCCESS:
            const comunicadoIndex = state.comunicados.findIndex((comunicadoRecibido) => comunicadoRecibido.id = action.comunicado.id);
            state.comunicados[comunicadoIndex] = processComunicadoRecibido(action.comunicado);
            return {
                ...state,
                comunicados: state.comunicados,
            }
    }
    return state;
};
