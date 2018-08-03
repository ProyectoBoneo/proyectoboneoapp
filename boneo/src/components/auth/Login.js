import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { TextInput, Button, View, Text } from 'react-native';
import { formInputChanged, login } from 'boneo/src/actions/auth';

class LoginView extends React.Component {
    render() {
        return (
            <View>
                <TextInput placeholder='usuario'
                           onChange={ e => this.props.dispatch(formInputChanged({username: e.target.value})) }
                />
                <TextInput textContentType='password'
                           placeholder='password'
                           onChange={ e => this.props.dispatch(formInputChanged({password: e.target.value})) }
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
        username: state.auth.input.username,
        password: state.auth.input.password,
        token: state.auth.token
    };
};

export default connect(mapStateToProps)(LoginView);
