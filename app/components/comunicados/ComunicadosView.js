import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FontAwesome, { Icons } from 'react-native-fontawesome';

import { retrieveComunicados } from 'app/actions/comunicados';
import BadgeDrawerLabel from 'app/components/badges/BadgeDrawerLabel';
import NavigationContainer from 'app/components/navigation/NavigationContainer';
import ComunicadosListView from 'app/components/comunicados/ComunicadosListView';
import ComunicadosDetailView from 'app/components/comunicados/ComunicadosDetailView';


const mapStateToDrawerLabelProps = (state) => {
    return {
        badgeCount: state.comunicados.unreadComunicadosCount
    }
};

const ComunicadosDrawerLabel = connect(mapStateToDrawerLabelProps)(BadgeDrawerLabel);

class ComunicadosView extends React.Component {
    static navigationOptions = {
        drawerLabel: ({ tintColor }) => <ComunicadosDrawerLabel labelText='Comunicados' color={tintColor} />,
        drawerIcon: ({ tintColor }) => (
            <FontAwesome style={{color: tintColor}}>{ Icons.envelope }</FontAwesome>
        ),
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
                    <ComunicadosDetailView
                        dispatch={ this.props.dispatch }
                        comunicadoRecibido={ this.state.selectedComunicado }
                    /> :
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