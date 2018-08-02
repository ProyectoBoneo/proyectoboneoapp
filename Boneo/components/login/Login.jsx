import PropTypes from 'prop-types';
import React from 'react';
import { TextInput, Button } from 'react-native';
import { inputChange, login } from '../../actions/login';
import AppContainer from "../containers/AppContainer";

class LoginView extends React.Component {
    render() {
        return (
            <AppContainer>
                <Text>Text in the container</Text>
                <TextInput onChange={ e => this.props.dispatch(inputChange({username: e.value})) } />
                <TextInput onChange={ e => this.props.dispatch(inputChange({username: e.value})) } />
                <Button title='Login' onPress={ this.props.dispatch(login(this.props.username, this.props.password)) }/>
            </AppContainer>
        );
    }
}

LoginView.propTypes = {
    username: PropTypes.string,
    password: PropTypes.string
};

export default LoginView;