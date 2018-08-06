import React from 'react';
import { ListView, Text } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { retrieveComunicados } from 'app/actions/comunicados';
import NavigationContainer from 'app/components/navigation/NavigationContainer';

class ComunicadosView extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Comunicados',
    };
    constructor(props) {
        super(props);
        this.listViewDataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    }
    componentWillMount() {
        this.props.dispatch(retrieveComunicados());
    }
    render() {
        return (
            <NavigationContainer navigation={ this.props.navigation }>
                <Text>Comunicados</Text>
                <ListView
                    dataSource={ this.listViewDataSource.cloneWithRows(this.props.comunicados) }
                    renderRow={(comunicadoModel) => <Text>{ comunicadoModel.comunicado.asunto }</Text>}
                />
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