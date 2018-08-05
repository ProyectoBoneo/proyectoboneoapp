import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { TextInput, Button, View } from 'react-native';
import { formInputChanged, login } from 'app/actions/auth';

class LoginView extends React.Component {
    render() {
        return (
            <View>
                <TextInput placeholder='usuario'
                           onChangeText={ text => this.props.dispatch(formInputChanged({username: text})) }
                />
                <TextInput textContentType='password'
                           placeholder='password'
                           secureTextEntry={ true }
                           onChangeText={ text => this.props.dispatch(formInputChanged({password: text})) }
                />
                <Button title='Login' onPress={ () => this.props.dispatch(login(this.props.username, this.props.password)) }/>
            </View>
        );
    }
}

LoginView.propTypes = {
    username: PropTypes.string,
    password: PropTypes.string
};

const mapStateToProps = (state) => {
    return {
        username: state.auth.input.username,
        password: state.auth.input.password
    };
};

export default connect(mapStateToProps)(LoginView);
