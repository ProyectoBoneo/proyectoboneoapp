import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import AuthHandler from 'boneo/src/components/auth/AuthHandler';
import RootReducer from 'boneo/src/reducers/index';

const store = createStore(RootReducer, applyMiddleware(thunk));

export default class App extends React.Component {
    render () {
        return (<Provider store={store}>
            <AuthHandler/>
        </Provider>);
    }
}
