import { profileAPI } from "../API/api";

const ADD_POST = 'profile/ADD-POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_USER_STATUS = 'profile/SET_USER_STATUS';
const DELETE_POST = 'profile/DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'profile/SAVE_PHOTO_SUCCESS';

const initialState = {
    posts: [
        { id: 1, message: 'Hi!', likesCount: 3 },
        { id: 2, message: "It's my first post", likesCount: 25 }
    ],
    profile: null,
    userStatus: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: 
            const newPost = {
                id: 3,
                message: action.newPostText,
                likesCount: 0
            };

            return {
                ...state,
                posts: [...state.posts, newPost],
            };

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };

        case SET_USER_STATUS:
            return {
                ...state,
                userStatus: action.userStatus
            };

        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            };

        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            };

        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText) => {
    return { type: ADD_POST, newPostText };
};
export const setUserProfile = (profile) => {
    return { 
        type: SET_USER_PROFILE, 
        profile
    };
};
export const setUserStatus = (userStatus) => {
    return { 
        type: SET_USER_STATUS, 
        userStatus
    };
};
export const deletePost = (postId) => {
    return { 
        type: DELETE_POST, 
        postId
    };
};
export const savePhotoSuccess = (photos) => {
    return { 
        type: SAVE_PHOTO_SUCCESS, 
        photos
    };
};

export const getUserProfile = (id) => async (dispatch) => {
    const data = await profileAPI.getUserById(id);
    dispatch(setUserProfile(data));
};
export const getUserStatus = (userId) => async (dispatch) => {
    const data = await profileAPI.getStatus(userId);
    dispatch(setUserStatus(data));
};
export const updateUserStatus = (userStatus) => async (dispatch) => {
    const data = await profileAPI.updateStatus(userStatus);
    if (data.resultCode === 0) {
        dispatch(setUserStatus(userStatus));
    }
};
export const savePhoto = (file) => async (dispatch) => {
    const data = await profileAPI.savePhoto(file);
    if (data.resultCode === 0) {
        dispatch(savePhotoSuccess(data.data.photos));
    }
};

export default profileReducer;