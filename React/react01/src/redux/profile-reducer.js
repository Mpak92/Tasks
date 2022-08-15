import { profileAPI } from "../API/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

const initialState = {
    posts: [
        { id: 1, message: 'Hi!', likesCount: 3 },
        { id: 2, message: "It's my first post", likesCount: 25 }
    ],
    newPostText: '',
    profile: null,
    userStatus: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: 
            const newPost = {
                id: 3,
                message: state.newPostText,
                likesCount: 0
            };

            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };

        case UPDATE_NEW_POST_TEXT: 
            return {
                ...state,
                newPostText: action.newText
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

        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return { type: ADD_POST };
};
export const updateNewPostTextActionCreator = (text) => {
    return { 
        type: UPDATE_NEW_POST_TEXT, 
        newText: text 
    };
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

export const getUserProfile = (userId, authorizedId) => {
    return (dispatch) => {
        let id = userId;
        if (!id) {
            authorizedId ? id = authorizedId : id = 2
        }
        profileAPI.getUserById(id).then(data => {
            dispatch(setUserProfile(data));
            });
    }
};
export const getUserStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(data => {
            dispatch(setUserStatus(data));
            });
    }
};
export const updateUserStatus = (userStatus) => {
    return (dispatch) => {
        profileAPI.updateStatus(userStatus).then(data => {
            if (data.resultCode === 0) {
                dispatch(setUserStatus(userStatus));
            }
        });
    }
}

export default profileReducer;