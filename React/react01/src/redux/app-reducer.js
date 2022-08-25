import { authMe } from './auth-reducer';

const SET_INITIALIZED = 'app/SET_INITIALIZED';

const initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            };

        default:
            return state;
    }
}

export const setInitialized = () => {
    return { type: SET_INITIALIZED };
};

export const initilizeApp = () => async (dispatch) => {
    const promise = await dispatch(authMe());
    await Promise.all([promise]);
    dispatch(setInitialized());
};

export default appReducer;