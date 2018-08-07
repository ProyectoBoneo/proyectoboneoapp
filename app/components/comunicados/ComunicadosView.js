import React from 'react';
import {BackHandler} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { retrieveComunicados } from 'app/actions/comunicados';
import NavigationContainer from 'app/components/navigation/NavigationContainer';
import ComunicadosListView from 'app/components/comunicados/ComunicadosListView';
import ComunicadosDetailView from 'app/components/comunicados/ComunicadosDetailView';


class ComunicadosView extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Comunicados',
    };
    constructor(props) {
        super(props);
        this.state = { selectedComunicado: null };
    }
    componentWillMount() {
        this.props.dispatch(retrieveComunicados());
    }
    render() {
        const onBackButton = this.state.selectedComunicado ? () => this.setState({selectedComunicado: null}) : null;
        return (
            <NavigationContainer navigation={ this.props.navigation } title='Comunicados' onBackButton={ onBackButton }>
                { this.state.selectedComunicado ?
                    <ComunicadosDetailView comunicado={ this.state.selectedComunicado }/> :
                    <ComunicadosListView
                        comunicados={ this.props.comunicados }
                         onPressItem={ (selectedComunicado) => this.setState({selectedComunicado}) }
                    />
                }

            </NavigationContainer>
        );
    }
}

ComunicadosView.propTypes = {
    comunicados: PropTypes.arrayOf(PropTypes.object)
};

const mapStateToProps = (state) => {
    return {
        comunicados: state.comunicados.comunicados
    }
};

export default connect(mapStateToProps)(ComunicadosView);