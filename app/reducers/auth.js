import {LOGIN_SUCCESS, LOGOUT_SUCCESS, INPUT_CHANGE, RETRIEVE_TOKEN_SUCCESS} from 'app/actions/auth';

const initialState = {
    input: {
        username: '',
        password: ''
    },
    token: null
};

export default function(state = initialState, action) {
    switch (action.type) {
        case INPUT_CHANGE:
            return {
                ...state,
                input: {...state.input, ...action.inputChange}
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                token: action.token
            };
        case RETRIEVE_TOKEN_SUCCESS:
            return {
                ...state,
                token: action.token
            };
        case LOGOUT_SUCCESS:
            return initialState;
    }
    return state;
};
