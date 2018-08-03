import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import HomeView from 'boneo/src/components/home/Home';
import LoginView from 'boneo/src/components/auth/Login';
import RootReducer from 'boneo/src/reducers/index';

const StackNavigator = createStackNavigator({
    Login: { screen: LoginView },
    Home: { screen: HomeView }
});

const store = createStore(RootReducer, applyMiddleware(thunk));

export default class App extends React.Component {
    render () {
        return (<Provider store={store}>
            <View>
                <LoginView/>
            </View>
        </Provider>);
    }
}
