import { usersAPI } from "../API/api";

const FOLLOW = 'user/FOLLOW';
const UNFOLLOW = 'user/UNFOLLOW';
const SET_USERS = 'user/SET_USERS';
const SET_CURRENT_PAGE = 'user/SET_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT = 'user/SET_USERS_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'user/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'user/TOGGLE_IS_FOLLOWING_PROGRESS';

const initialState = {
    users: [],
    pageSize: 5,
    totalCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: 
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true};
                    }
                    return u;
                } ),
            };

        case UNFOLLOW: 
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false};
                    }
                    return u;
                } ),
            };

        case SET_USERS:
            return {
                ...state,
                users: action.users
            };

        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };

        case SET_USERS_TOTAL_COUNT:
            return {
                ...state,
                totalCount: action.totalCount
            };

        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };

        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.inProgress
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            };

        default:
            return state;
    }
}

export const follow = (userId) => {
    return { type: FOLLOW, userId };
};
export const unfollow = (userId) => {
    return { type: UNFOLLOW, userId };
};
export const setUsers = (users) => {
    return { type: SET_USERS, users };
};
export const setCurrentPage = (currentPage) => {
    return { type: SET_CURRENT_PAGE, currentPage };
};
export const setTotalUsersCount = (totalCount) => {
    return { type: SET_USERS_TOTAL_COUNT, totalCount };
};
export const toggleIsFetching = (isFetching) => {
    return { type: TOGGLE_IS_FETCHING, isFetching };
};
export const toggleFollowingProgress = (inProgress, userId) => {
    return { type: TOGGLE_IS_FOLLOWING_PROGRESS, inProgress, userId };
};

export const getUsers = (currentPage, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    const data = await usersAPI.getUsers(currentPage, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount))
};
export const updateUsers = (pageNumber, pageSize) => async (dispatch) => {
    dispatch(setCurrentPage(pageNumber));
    dispatch(toggleIsFetching(true));
    const data = await usersAPI.getUsers(pageNumber, pageSize)
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
};
export const followUser = (id) => async (dispatch) => {
    dispatch(toggleFollowingProgress(true, id));
    const data = await usersAPI.followUser(id);
    if (data.resultCode === 0) {
        dispatch(follow(id));
    }
    dispatch(toggleFollowingProgress(false, id));
};
export const unfollowUser = (id) => async (dispatch) => {
    dispatch(toggleFollowingProgress(true, id));
    const data = await usersAPI.unfollowUser(id);
    if (data.resultCode === 0) {
        dispatch(unfollow(id));
    }
    dispatch(toggleFollowingProgress(false, id));
};

export default usersReducer;