import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import NavigationContainer from 'app/components/navigation/NavigationContainer';
import { retrievePerfilAcademico } from 'app/actions/perfilAcademico';

import PerfilAcademicoListView from 'app/components/perfil_academico/PerfilAcademicoListView';
import PerfilAcademicoDetailListView from 'app/components/perfil_academico/PerfilAcademicoDetailListView';


class PerfilAcademicoView extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Perfil Académico',
    };
    constructor(props) {
        super(props);
        this.state = { selectedPerfilMateria: null };
    }
    componentWillMount() {
        this.props.dispatch(retrievePerfilAcademico());
    }
    render() {
        const onBackButton = this.state.selectedPerfilMateria ? () => this.setState({selectedPerfilMateria: null}) : null;
        const title = this.state.selectedPerfilMateria ? this.state.selectedPerfilMateria.nombre_materia : 'Perfil Académico';
        return (
            <NavigationContainer navigation={ this.props.navigation } title={ title } onBackButton={ onBackButton }>
                { this.state.selectedPerfilMateria ?
                    <PerfilAcademicoDetailListView
                        dispatch={ this.props.dispatch }
                        perfilAcademicoMateria={ this.state.selectedPerfilMateria }
                    /> :
                    <PerfilAcademicoListView
                        perfilAcademico={ this.props.perfilAcademico }
                        onPressItem={ (selectedPerfilMateria) => this.setState({selectedPerfilMateria}) }
                    />
                }
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