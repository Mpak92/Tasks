import { authAPI, securityAPI } from "../API/api";

const SET_USER_DATA = 'auth/SET_USER_DATA';
const SET_CAPTCHA_URL = 'auth/SET_CAPTCHA_URL';

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
            };

        case SET_CAPTCHA_URL:
            return {
                ...state,
                captchaUrl: action.url,
            };

        default:
            return state;
    }
}

export const setUserData = (userId, email, login, isAuth) => {
    return { type: SET_USER_DATA, data: { userId, email, login, isAuth} };
};
export const setCaptchaUrl = (url) => {
    return { type: SET_CAPTCHA_URL, url};
};

export const authMe = () => async (dispatch) => {
    const data = await authAPI.authMe();
    if (data.resultCode === 0) {
        const { id, email, login } = { ...data.data };
        dispatch(setUserData(id, email, login, true));
    }
};
export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    const data = await authAPI.login(email, password, rememberMe, captcha);
    if (data.resultCode === 0) {
        dispatch(authMe());
    } else if (data.resultCode === 10) {
        dispatch(getCaptcha());
    }
};
export const logout = () => async (dispatch) => {
    const data = await authAPI.logout();
    if (data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false));
    }
};
export const getCaptcha = () => async (dispatch) => {
    const data = await securityAPI.getCaptchaUrl();
    dispatch(setCaptchaUrl(data.url));
};

export default authReducer;