import { combineReducers } from 'redux';

import auth from 'boneo/src/reducers/auth';

const RootReducer = combineReducers({
    auth
});

export default RootReducer;