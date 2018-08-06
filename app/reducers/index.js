import { combineReducers } from 'redux';

import auth from 'app/reducers/auth';
import comunicados from 'app/reducers/comunicados';

const RootReducer = combineReducers({
    auth,
    comunicados
});

export default RootReducer;