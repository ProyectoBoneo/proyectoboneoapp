import { AsyncStorage } from 'react-native';

import { userDataRefresh } from 'app/actions/userDataRefresh';

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
    return (dispatch, getState, {api}) => {
        return AsyncStorage.getItem(USER_TOKEN, () => {}).then(
            (token) => {
                if (token) {
                    api.defaults.headers.common['Authorization'] = `Token ${token}`;
                    dispatch(retrieveTokenSuccess(token));
                    dispatch(userDataRefresh());
                }
            }
        );
    }
};

export const login = (username, password) => {
    return (dispatch, getState, {api}) =>
        api.post('/get_token/',
            {
                username,
                password
            }
        ).then(response => {
            api.defaults.headers.common['Authorization'] = `Token ${response.data.token}`;
            return AsyncStorage.setItem(USER_TOKEN, response.data.token).then(
                () => {
                    dispatch(loginSuccess(response.data.token));
                    dispatch(userDataRefresh());
                }
            )
        });
};

export const logout = () => {
    return (dispatch, getState, {api}) => {
        delete api.defaults.headers.common['Authorization'];
        AsyncStorage.clear().then(
            () => dispatch(logoutSuccess())
        )
    }
};