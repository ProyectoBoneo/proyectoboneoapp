import { AsyncStorage } from 'react-native';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const INPUT_CHANGE = 'INPUT_CHANGE';
export const RETRIEVE_TOKEN_SUCCESS = 'RETRIEVE_TOKEN_SUCCESS';


export const USER_TOKEN = 'USER_TOKEN';

const loginSuccess = (token) => {
    return {
        type: LOGIN_SUCCESS,
        token,
    }
};

const logoutSuccess = () => {
    return {
        type: LOGOUT_SUCCESS
    }
};

export const formInputChanged = (inputChange) => {
    return {
        type: INPUT_CHANGE,
        inputChange
    }
};

const retrieveTokenSuccess = (token) => {
    return {
        type: RETRIEVE_TOKEN_SUCCESS,
        token
    }
};


export const retrieveToken = () => {
    return dispatch => {
        return AsyncStorage.getItem(USER_TOKEN, () => {}).then(
            (token) => dispatch(retrieveTokenSuccess(token))
        );
    }
};

export const login = (username, password) => {
    return dispatch =>
        fetch('http://10.0.2.2:8000/api/get_token/',
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
        ).then(response => response.json()
        ).then(responseJson => {
            const token = responseJson.token;
            return AsyncStorage.setItem(USER_TOKEN, token).then(
                () => dispatch(loginSuccess(token))
            );
        });
};

export const logout = () => {
    return dispatch =>
        AsyncStorage.clear().then(
            () => dispatch(logoutSuccess())
        )
};