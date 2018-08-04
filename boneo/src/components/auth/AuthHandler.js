import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LoginView from 'boneo/src/components/auth/LoginView';
import NavigationView from 'boneo/src/components/navigation/NavigationView';


class AuthHandler extends React.Component {
    render() {
        return this.props.token ? <NavigationView/> : <LoginView/>;
    }
}

AuthHandler.propTypes = {
    token: PropTypes.string
};

const mapStateToProps = (state) => {
    return {
        token: state.auth.token
    };
};

export default connect(mapStateToProps)(AuthHandler);
