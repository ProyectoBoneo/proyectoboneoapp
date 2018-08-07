import React from 'react';
import {Text} from 'react-native';
import NavigationContainer from 'app/components/navigation/NavigationContainer';

import MainStyles from 'app/styles/MainStyles';


class HomeView extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Home',
    };
    render() {
        return (
            <NavigationContainer navigation={ this.props.navigation } title='Boneo'>
                <Text style={ MainStyles.text } >Bienvenido al sistema Boneo</Text>
            </NavigationContainer>
        );
    }
}

export default HomeView;