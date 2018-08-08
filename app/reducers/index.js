import { combineReducers } from 'redux';

import auth from 'app/reducers/auth';
import comunicados from 'app/reducers/comunicados';
import perfilAcademico from 'app/reducers/perfilAcademico';

const RootReducer = combineReducers({
    auth,
    comunicados,
    perfilAcademico,
});

export default RootReducer;