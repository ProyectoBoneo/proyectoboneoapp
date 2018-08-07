import React from 'react';
import { BackHandler, FlatList, Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';

class ComunicadoItem extends React.PureComponent {
    render() {
        return (
            <TouchableOpacity onPress={ () => this.props.onPressItem(this.props.comunicado) }>
                <View>
                    <Text>{ this.props.comunicado.comunicado.asunto }</Text>
                    <Text>{ this.props.comunicado.comunicado.fecha }</Text>
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
                <Text>Comunicados</Text>
                <FlatList
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