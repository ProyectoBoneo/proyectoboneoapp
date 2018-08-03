import {LOGIN_SUCCESS, INPUT_CHANGE} from 'boneo/src/actions/auth';

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
    }
    return state;
};
