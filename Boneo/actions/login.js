import { fetch } from 'react-native';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const INPUT_CHANGE = 'INPUT_CHANGE';

const loginSuccess = (token) => {
    return {
        type: LOGIN_SUCCESS,
        token
    }
};

export const inputChange = (inputChange) => {
    return {
        type: INPUT_CHANGE,
        ...inputChange
    }
};

export const login = (username, password) => {
    return dispatch =>
        fetch('http://localhost/api/get_token/',
            {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    password
                }),
            }
        ).then(response => dispatch(loginSuccess(JSON.parse(response.text))));
};