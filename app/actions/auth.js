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
    return (dispatch, getState, api) => {
        return AsyncStorage.getItem(USER_TOKEN, () => {}).then(
            (token) => {
                api.defaults.headers.common['Authorization'] = `Token ${token}`;
                dispatch(retrieveTokenSuccess(token));
            }
        );
    }
};

export const login = (username, password) => {
    return (dispatch, getState, api) =>
        api.post('/get_token/',
            {
                data: {
                    username,
                    password
                },
            }
        ).then(response => {
            const responseJson = JSON.parse(response.data);
            api.defaults.headers.common['Authorization'] = `Token ${responseJson.token}`;
            return AsyncStorage.setItem(USER_TOKEN, responseJson.token).then(
                () => dispatch(loginSuccess(responseJson.token))
            );
        });
};

export const logout = () => {
    return (dispatch, getState, api) => {
        delete api.defaults.common['Authorization'];
        AsyncStorage.clear().then(
            () => dispatch(logoutSuccess())
        )
    }
};