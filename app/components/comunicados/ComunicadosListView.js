import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';

import ComunicadosStyles from 'app/styles/comunicados/ComunicadosStyles';
import MainStyles from 'app/styles/MainStyles';

class ComunicadoItem extends React.PureComponent {
    render() {
        const comunicado = this.props.comunicadoRecibido.comunicado;
        const subjectStyle = [ComunicadosStyles.comunicadoItemAsunto,
            !this.props.comunicadoRecibido.fecha_leido && ComunicadosStyles.comunicadoItemAsuntoNoLeido];
        return (
            <TouchableOpacity onPress={ () => this.props.onPressItem(this.props.comunicadoRecibido) }>
                <View style={ ComunicadosStyles.comunicadoItemView }>
                    <View style={ ComunicadosStyles.comunicadoItemAsuntoView }>
                        <Text style={ subjectStyle }>{ comunicado.asunto }</Text>
                        <Text style={ ComunicadosStyles.comunicadoItemEmisor }>{ comunicado.emisor.nombre }</Text>
                    </View>
                    <Text style={ ComunicadosStyles.comunicadoItemFecha }>{ comunicado.fecha }</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

ComunicadoItem.propTypes = {
    comunicadoRecibido: PropTypes.object,
    selected: PropTypes.bool,
    onPressItem: PropTypes.func,
};

class ComunicadosListView extends React.Component {
    render() {
        return (
            <View>
                <FlatList
                    style={ MainStyles.listView }
                    data={ this.props.comunicados }
                    keyExtractor={ (item, index) => item.id.toString() }
                    renderItem={ ({item}) => <ComunicadoItem
                        comunicadoRecibido={ item }
                        onPressItem={ this.props.onPressItem }
                    />}
                />
            </View>
        );
    }
}

ComunicadosListView.propTypes = {
    comunicados: PropTypes.arrayOf(PropTypes.object),
    onPressItem: PropTypes.func
};

export default ComunicadosListView;