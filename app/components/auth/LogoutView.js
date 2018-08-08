import React from 'react';
import { Button, Text } from 'react-native';
import { connect } from 'react-redux';
import { logout } from 'app/actions/auth';
import FontAwesome, { Icons } from 'react-native-fontawesome';

import NavigationContainer from 'app/components/navigation/NavigationContainer';
import MainStyles from 'app/styles/MainStyles';


class LogoutView extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Cerrar sesión',
        drawerIcon: ({ tintColor }) => (
            <FontAwesome style={{color: tintColor}}>{ Icons.lock }</FontAwesome>
        ),
    };
    render() {
        return (
            <NavigationContainer navigation={ this.props.navigation } title='Cierre de sesión'>
                <Text style={ MainStyles.text }>¿ Desea cerrar su sesión ?</Text>
                <Button style={ MainStyles.button } title='Cerrar sesión' onPress={ () => this.props.dispatch(logout()) }/>
            </NavigationContainer>
        );
    }
}

export default connect()(LogoutView);
