import { connect } from "react-redux";
import {
    follow, unfollow, toggleFollowingProgress,
    getUsers, updateUsers, followUser, unfollowUser
} from "../../redux/users-reducer";
import React from 'react';
import Users from './Users';
import Preloader from "../common/preloader/Preloader";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalCount, getUsersSelect } from './../../redux/users-selectors';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.updateUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalCount={this.props.totalCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users} 
                followingInProgress={this.props.followingInProgress} 
                followUser={this.props.followUser} 
                unfollowUser={this.props.unfollowUser} />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: getUsersSelect(state),
        pageSize: getPageSize(state),
        totalCount: getTotalCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
};

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {
        follow, unfollow, toggleFollowingProgress,
        getUsers, updateUsers, followUser, unfollowUser
    })
)(UsersContainer);
