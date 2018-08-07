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
            <NavigationContainer navigation={ this.props.navigation }>
                <Text style={ MainStyles.title } >Home</Text>
            </NavigationContainer>
        );
    }
}

export default HomeView;