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
        inputChange
    }
};

export const login = (username, password) => {
    return dispatch =>
         fetch('http://192.168.0.33:8000/api/get_token/',
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
        ).then(
            response => dispatch(loginSuccess(JSON.parse(response.text)))
        ).catch(response => console.warn('This response sucks: ' + response.text));
};