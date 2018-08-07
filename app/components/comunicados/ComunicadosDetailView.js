import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import MainStyles from 'app/styles/MainStyles';

import { markAsRead } from 'app/actions/comunicados';


class ComunicadosDetailView extends React.Component {
    componentDidMount() {
        if (!this.props.comunicadoRecibido.fecha_leido) {
            this.props.dispatch(markAsRead(this.props.comunicadoRecibido));
        }
    }
    render() {
        const comunicado = this.props.comunicadoRecibido.comunicado;
        return (
            <View>
                <Text style={ MainStyles.title } >{ comunicado.asunto }</Text>
                <Text style={ MainStyles.text }>{ comunicado.mensaje }</Text>
                <Text style={ MainStyles.text }>{ comunicado.emisor.nombre }</Text>
            </View>
        );
    }
}

ComunicadosDetailView.propTypes = {
    dispatch: PropTypes.func.isRequired,
    comunicadoRecibido: PropTypes.object.isRequired
};

export default ComunicadosDetailView;