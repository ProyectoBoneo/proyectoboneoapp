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
            <NavigationContainer navigation={ this.props.navigation } title='Estado académico'>
                <Text style={ MainStyles.text }>Aquí verá su estado académico</Text>
            </NavigationContainer>
        );
    }
}

export default EstadoAcademicoView;