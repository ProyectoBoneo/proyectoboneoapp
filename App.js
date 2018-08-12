import React from 'react';
import DeviceInfo from 'react-native-device-info';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import axios from 'axios';
import thunk from 'redux-thunk';

import AuthenticationContainer from 'app/components/auth/AuthenticationContainer';
import RootReducer from 'app/reducers/index';
const api = axios.create();

if (DeviceInfo.isEmulator()) {
    api.defaults.baseURL = "http://10.0.2.2:8000/api/";
} else {
    api.defaults.baseURL = "http://192.168.0.33:8000/api/";   // TODO: test in device only with prod server?
}

api.defaults.headers.common['Content-Type'] = 'application/json';
api.defaults.headers.common['Accept'] = 'application/json';

const store = createStore(RootReducer, applyMiddleware(thunk.withExtraArgument({api})));

export default class App extends React.Component {
    render () {
        return (<Provider store={store}>
            <AuthenticationContainer/>
        </Provider>);
    }
}
