import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { TextInput, Button, View, Text } from 'react-native';
import { inputChange, login } from 'boneo/src/actions/auth';

class LoginView extends React.Component {
    render() {
        return (
            <View>
                <TextInput placeholder='usuario'
                           onChange={ e => this.props.dispatch(inputChange({username: e.value})) }
                />
                <TextInput textContentType='password'
                           placeholder='password'
                           onChange={ e => this.props.dispatch(inputChange({password: e.value})) }
                />
                <Button title='Login' onPress={ () => this.props.dispatch(login(this.props.username, this.props.password)) }/>
                { this.props.token && <Text>Your token is { this.props.token }</Text> }
            </View>
        );
    }
}

LoginView.propTypes = {
    username: PropTypes.string,
    password: PropTypes.string,
    token: PropTypes.string
};

const mapStateToProps = (state) => {
    return {
        dispatch: state.dispatch,
        username: state.auth.username,
        password: state.auth.password,
        token: state.auth.token
    };
};

export default connect(mapStateToProps)(LoginView);
