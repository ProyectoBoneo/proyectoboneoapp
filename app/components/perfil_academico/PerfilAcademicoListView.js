import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import PropTypes from 'prop-types';

import MainStyles from 'app/styles/MainStyles';
import PerfilAcademicoStyles from 'app/styles/perfil_academico/PerfilAcademicoStyles';


class PerfilAcademicoItem extends React.PureComponent {
    render() {
        const textStyle = this.props.perfilMateria.unreadUpdatesCount > 0 && PerfilAcademicoStyles.perfilAcademicoTextNoLeido;
        return (
            <TouchableOpacity onPress={ () => this.props.onPressItem(this.props.perfilMateria) }>
                <View style={ PerfilAcademicoStyles.perfilAcademicoItemView }>
                    <Text style={ textStyle }>{ this.props.perfilMateria.nombre_materia }</Text>
                    <Text style={ textStyle }>{ this.props.perfilMateria.promedio }</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

PerfilAcademicoItem.propTypes = {
    perfilMateria: PropTypes.object,
    onPressItem: PropTypes.func,
};


class PerfilAcademicoListView extends React.Component {
    render() {
        return (
            <View>
                <FlatList
                    style={ MainStyles.listView }
                    data={ this.props.perfilAcademico }
                    keyExtractor={ (item, index) => index.toString() }
                    renderItem={ ({item}) => <PerfilAcademicoItem
                        perfilMateria={ item }
                        onPressItem={ this.props.onPressItem }
                    />}
                />
            </View>
        );
    }
}

PerfilAcademicoListView.propTypes = {
    perfilAcademico: PropTypes.arrayOf(PropTypes.object),
    onPressItem: PropTypes.func
};

export default PerfilAcademicoListView;