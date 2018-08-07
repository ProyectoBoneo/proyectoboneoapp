import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import MainStyles from 'app/styles/MainStyles';


class ComunicadosDetailView extends React.Component {
    render() {
        return (
            <View>
                <Text style={ MainStyles.title } >{ this.props.comunicado.comunicado.asunto }</Text>
                <Text style={ MainStyles.text }>{ this.props.comunicado.comunicado.mensaje }</Text>
            </View>
        );
    }
}

ComunicadosDetailView.propTypes = {
    comunicado: PropTypes.object.isRequired
};

export default ComunicadosDetailView;