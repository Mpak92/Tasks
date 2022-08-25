import { authAPI } from "../API/api";

const SET_USER_DATA = 'auth/SET_USER_DATA';

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
            };

        default:
            return state;
    }
}

export const setUserData = (userId, email, login, isAuth) => {
    return { type: SET_USER_DATA, data: { userId, email, login, isAuth} };
};

export const authMe = () => async (dispatch) => {
    const data = await authAPI.authMe();
    if (data.resultCode === 0) {
        const { id, email, login } = { ...data.data };
        dispatch(setUserData(id, email, login, true));
    }
};

export const login = (email, password, rememberMe) => async (dispatch) => {
    const data = await authAPI.login(email, password, rememberMe);
    if (data.resultCode === 0) {
        dispatch(authMe());
    }
};

export const logout = () => async (dispatch) => {
    const data = await authAPI.logout();
    if (data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false));
    }
};

export default authReducer;