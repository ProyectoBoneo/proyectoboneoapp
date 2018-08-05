import { combineReducers } from 'redux';

import auth from 'app/reducers/auth';

const RootReducer = combineReducers({
    auth
});

export default RootReducer;