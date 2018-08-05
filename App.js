import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import AuthenticationContainer from 'app/components/auth/AuthenticationContainer';
import RootReducer from 'app/reducers/index';

const store = createStore(RootReducer, applyMiddleware(thunk));

export default class App extends React.Component {
    render () {
        return (<Provider store={store}>
            <AuthenticationContainer/>
        </Provider>);
    }
}
