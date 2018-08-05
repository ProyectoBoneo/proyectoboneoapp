import React from 'react';
import {Text} from 'react-native';
import NavigationContainer from 'app/components/navigation/NavigationContainer';

class EstadoAcademicoView extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Estado Académico',
    };
    render() {
        return (
            <NavigationContainer navigation={ this.props.navigation }>
                <Text>Estado academico</Text>
            </NavigationContainer>
        );
    }
}

export default EstadoAcademicoView;