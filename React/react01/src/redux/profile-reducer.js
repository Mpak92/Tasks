import { profileAPI } from "../API/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const DELETE_POST = 'DELETE_POST';

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