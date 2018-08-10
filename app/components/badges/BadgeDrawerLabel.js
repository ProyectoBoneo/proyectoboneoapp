import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import {Text, Badge} from 'react-native-elements';

import BadgeDrawerLabelStyles from 'app/styles/badges/BadgeDrawerLabelStyles';

class BadgeDrawerLabel extends React.Component {
    render() {
        const BadgeElement = this.props.badgeCount > 0 &&
            <Badge
                containerStyle={{
                    backgroundColor: '#e35c84',
                    padding: 3,
                    width: 28,
                    marginRight: 8,
                    borderRadius: 12,
                }}
                textStyle={{
                    color: 'white',
                    fontSize: 12,
                }}
                value={ this.props.badgeCount }
            />;
        return <View style={ BadgeDrawerLabelStyles.view }>
            <Text style={[BadgeDrawerLabelStyles.label, {color: this.props.color}]}>
                { this.props.labelText }
            </Text>
            { BadgeElement }
        </View>
    }
}

BadgeDrawerLabel.propTypes = {
    color: PropTypes.string.isRequired,
    labelText: PropTypes.string.isRequired,
    badgeCount: PropTypes.number,
};

export default BadgeDrawerLabel;