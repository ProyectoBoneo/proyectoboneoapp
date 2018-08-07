import React from 'react';
import {Text} from 'react-native';
import NavigationContainer from 'app/components/navigation/NavigationContainer';

import MainStyles from 'app/styles/MainStyles';


class EstadoAcademicoView extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Estado Académico',
    };
    render() {
        return (
            <NavigationContainer navigation={ this.props.navigation }>
                <Text style={ MainStyles.title }>Estado academico</Text>
            </NavigationContainer>
        );
    }
}

export default EstadoAcademicoView;