import {LOGIN_SUCCESS, INPUT_CHANGE} from 'Boneo/actions/login';

const initialState = {
    input: {
        username: '',
        password: ''
    },
    token: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case INPUT_CHANGE:
            return {
                ...state,
                input: {
                    ...state.input,
                    action.inputChange
                }
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                token: action.token
            };
    }
};
