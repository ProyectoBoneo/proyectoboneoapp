import React from 'react';
import { Button, Text } from 'react-native';
import { connect } from 'react-redux';
import { logout } from 'boneo/src/actions/auth';
import NavigationContainer from 'boneo/src/components/navigation/NavigationContainer';

class LogoutView extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Cerrar sesión',
    };
    render() {
        return (
            <NavigationContainer navigation={ this.props.navigation }>
                <Text>¿ Desea cerrar sesión ?</Text>
                <Button title='Cerrar sesión' onPress={ () => this.props.dispatch(logout()) }/>
            </NavigationContainer>
        );
    }
}

export default connect()(LogoutView);
