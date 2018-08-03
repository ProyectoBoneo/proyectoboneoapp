export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const INPUT_CHANGE = 'INPUT_CHANGE';

const loginSuccess = (response) => {
    return {
        type: LOGIN_SUCCESS,
        token: response.token
    }
};

export const formInputChanged = (inputChange) => {
    return {
        type: INPUT_CHANGE,
        inputChange
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
        ).then(responseJson => dispatch(loginSuccess(responseJson)));
};