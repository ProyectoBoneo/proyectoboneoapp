import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import NavigationHeader from 'app/components/navigation/NavigationHeader';


class NavigationContainer extends React.Component {
    render () {
        return (
            <View>
                <NavigationHeader
                    onBackButton={ this.props.onBackButton }
                    navigation={ this.props.navigation }
                    title={ this.props.title }
                />
                { this.props.children }
            </View>
        );
    }
}

NavigationContainer.propTypes = {
    onBackButton: PropTypes.func,
    navigation: PropTypes.object.isRequired,
    children: PropTypes.oneOf(PropTypes.object, PropTypes.array),
    title: PropTypes.string.isRequired
};

export default NavigationContainer;