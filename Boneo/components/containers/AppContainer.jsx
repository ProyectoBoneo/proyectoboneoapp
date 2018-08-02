import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { View } from 'react-native';

let store = createStore();

export default class AppContainer extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <View className='main-container'>
                    { this.props.children }
                </View>
            </Provider>
        );
    }
}