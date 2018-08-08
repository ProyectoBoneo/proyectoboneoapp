import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import NavigationContainer from 'app/components/navigation/NavigationContainer';
import { retrievePerfilAcademico } from 'app/actions/perfilAcademico';

import MainStyles from 'app/styles/MainStyles';
import PerfilAcademicoStyles from "app/styles/perfil_academico/PerfilAcademicoStyles";


class PerfilAcademicoItem extends React.PureComponent {
    render() {
        return (
            <TouchableOpacity>
                <View style={ PerfilAcademicoStyles.perfilAcademicoItemView }>
                    <Text>{ this.props.perfilMateria.nombre_materia }</Text>
                    <Text>{ this.props.perfilMateria.promedio }</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

PerfilAcademicoItem.propTypes = {
    perfilMateria: PropTypes.object,
};


class PerfilAcademicoView extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Perfil Académico',
    };
    componentWillMount() {
        this.props.dispatch(retrievePerfilAcademico());
    }
    render() {
        return (
            <NavigationContainer navigation={ this.props.navigation } title='Perfil académico'>
                <FlatList
                    style={ MainStyles.listView }
                    data={ this.props.perfilAcademico }
                    keyExtractor={ (item, index) => item.nombre_materia }
                    renderItem={ ({item}) => <PerfilAcademicoItem
                        perfilMateria={ item }
                    />}
                />
            </NavigationContainer>
        );
    }
}

PerfilAcademicoView.propTypes = {
    perfilAcademico: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = (state) => {
    return {
        perfilAcademico: state.perfilAcademico.perfilAcademico
    }
};

export default connect(mapStateToProps)(PerfilAcademicoView);