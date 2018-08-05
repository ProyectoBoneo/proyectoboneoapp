import React from 'react';
import { View } from 'react-native';
import { Header } from 'react-native-elements';
import PropTypes from 'prop-types';

class NavigationContainer extends React.Component {
    render () {
        return (
            <View>
                <Header
                    leftComponent={{ icon: 'menu', color: '#fff', onPress: () => { this.props.navigation.openDrawer() } }}
                    centerComponent={{ text: 'Boneo', style: { color: '#fff' } }}
                />
                { this.props.children }
            </View>
        );
    }
}

NavigationContainer.propTypes = {
    navigation: PropTypes.object.isRequired,
    children: PropTypes.oneOf(PropTypes.object, PropTypes.array),
};

export default NavigationContainer;