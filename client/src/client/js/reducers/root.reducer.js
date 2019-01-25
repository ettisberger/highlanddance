import {CHANGE_LANGUAGE} from '../actions/actions';

const initialState = {
    language: "DE"
};

function rootReducer(state = initialState, { type, language}) {
    if (type === CHANGE_LANGUAGE) {
        return Object.assign({}, state, {
            language
        });    }

    return state;
};

export default rootReducer;