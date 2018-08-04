import React from 'react';
import {View, Text} from 'react-native';
import NavigationContainer from 'boneo/src/components/navigation/NavigationContainer';

class HomeView extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Home',
    };
    render() {
        return (
            <NavigationContainer navigation={ this.props.navigation }>
                <Text>Home</Text>
            </NavigationContainer>
        );
    }
}

export default HomeView;