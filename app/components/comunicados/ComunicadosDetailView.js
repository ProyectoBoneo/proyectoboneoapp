import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';


class ComunicadosDetailView extends React.Component {
    render() {
        return (
            <View>
                <Text>{ this.props.comunicado.comunicado.asunto }</Text>
                <Text>{ this.props.comunicado.comunicado.mensaje }</Text>
            </View>
        );
    }
}

ComunicadosDetailView.propTypes = {
    comunicado: PropTypes.object.isRequired
};

export default ComunicadosDetailView;