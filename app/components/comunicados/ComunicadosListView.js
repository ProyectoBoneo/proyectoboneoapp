import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';

import ComunicadosStyles from 'app/styles/comunicados/ComunicadosStyles';
import MainStyles from 'app/styles/MainStyles';

class ComunicadoItem extends React.PureComponent {
    render() {
        return (
            <TouchableOpacity onPress={ () => this.props.onPressItem(this.props.comunicado) }>
                <View style={ ComunicadosStyles.comunicadoItemView }>
                    <Text style={ ComunicadosStyles.comunicadoItemAsunto }>{ this.props.comunicado.comunicado.asunto }</Text>
                    <Text style={ ComunicadosStyles.comunicadoItemFecha }>{ this.props.comunicado.comunicado.fecha }</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

ComunicadoItem.propTypes = {
    comunicado: PropTypes.object,
    selected: PropTypes.bool,
    onPressItem: PropTypes.func,
};

class ComunicadosListView extends React.Component {
    render() {
        return (
            <View>
                <Text style={ MainStyles.title }>Comunicados</Text>
                <FlatList
                    style={ MainStyles.listView }
                    data={ this.props.comunicados }
                    keyExtractor={ (item, index) => item.id.toString() }
                    renderItem={ ({item}) => <ComunicadoItem
                        comunicado={ item }
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