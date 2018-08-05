import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import Config from 'react-native-config';
import axios from 'axios';
import thunk from 'redux-thunk';


import AuthenticationContainer from 'app/components/auth/AuthenticationContainer';
import RootReducer from 'app/reducers/index';

const api = axios.create();
api.defaults.baseURL = Config.API_BASE;
api.defaults.headers.common['Content-type'] = 'application/json';
api.defaults.headers.common['Accept'] = 'application/json';

const store = createStore(RootReducer, applyMiddleware(thunk.withExtraArgument({api})));

export default class App extends React.Component {
    render () {
        return (<Provider store={store}>
            <AuthenticationContainer/>
        </Provider>);
    }
}
