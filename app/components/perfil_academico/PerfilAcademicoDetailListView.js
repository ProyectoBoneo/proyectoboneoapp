import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import PropTypes from 'prop-types';

import MainStyles from 'app/styles/MainStyles';
import PerfilAcademicoStyles from 'app/styles/perfil_academico/PerfilAcademicoStyles';



class PerfilAcademicoDetailItem extends React.PureComponent {
    render() {
        return (
            <TouchableOpacity>
                <View style={ PerfilAcademicoStyles.perfilAcademicoItemView }>
                    <Text>{ this.props.resultadoEvaluacion.evaluacion }</Text>
                    <Text>{ this.props.resultadoEvaluacion.nota }</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

PerfilAcademicoDetailItem.propTypes = {
    resultadoEvaluacion: PropTypes.object,
    onPressItem: PropTypes.func,
};


class PerfilAcademicoDetailListView extends React.Component {
    render() {
        return (
            <View>
                <FlatList
                    style={ MainStyles.listView }
                    data={ this.props.perfilAcademicoMateria.evaluaciones }
                    keyExtractor={ (item, index) => item.id.toString() }
                    renderItem={ ({item}) => <PerfilAcademicoDetailItem
                        resultadoEvaluacion={ item }
                        onPressItem={ this.props.onPressItem }
                    />}
                />
            </View>
        );
    }
}

PerfilAcademicoDetailListView.propTypes = {
    dispatch: PropTypes.func.isRequired,
    perfilAcademicoMateria: PropTypes.object.isRequired,
};

export default PerfilAcademicoDetailListView;