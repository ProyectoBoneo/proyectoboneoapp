import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { retrieveToken } from 'app/actions/auth';
import LoginView from 'app/components/auth/LoginView';
import NavigationView from 'app/components/navigation/NavigationView';


class AuthenticationContainer extends React.Component {
    componentWillMount() {
        this.props.dispatch(retrieveToken());
    }
    render() {
        return this.props.token ? <NavigationView/> : <LoginView/>;
    }
}

AuthenticationContainer.propTypes = {
    token: PropTypes.string
};

const mapStateToProps = (state) => {
    return {
        token: state.auth.token
    };
};

export default connect(mapStateToProps)(AuthenticationContainer);
