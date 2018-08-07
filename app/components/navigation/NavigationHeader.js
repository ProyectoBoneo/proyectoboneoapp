import React from 'react';
import {View, Text, TouchableHighlight, BackHandler} from 'react-native';
import PropTypes from 'prop-types';
import FontAwesome, { Icons } from 'react-native-fontawesome';

import NavigationStyles from 'app/styles/navigation/NavigationStyles';

class NavigationHeader extends React.Component {
    handleBackPress = () => {
        this.props.onBackButton();
        return true;
    };
    componentDidMount() {
        if (this.props.onBackButton) {
            BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
        }
    }
    componentWillUnmount() {
        if (this.props.onBackButton) {
            BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
        }
    }
    render () {
        const icon = this.props.onBackButton ? Icons.arrowLeft : Icons.bars;
        const onPress = this.props.onBackButton || this.props.navigation.openDrawer;
        return (
            <View style={ NavigationStyles.navigationHeaderView }>
                <TouchableHighlight style={ NavigationStyles.navigationHeaderTouchable }
                                    onPress={ onPress } >
                    <FontAwesome style={ NavigationStyles.navigationHeaderIcon }>{ icon }</FontAwesome>
                </TouchableHighlight>
                <Text style={ NavigationStyles.title }>{ this.props.title }</Text>
            </View>
        );
    }
}

NavigationHeader.propTypes = {
    onBackButton: PropTypes.func,
    navigation: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
};

export default NavigationHeader;