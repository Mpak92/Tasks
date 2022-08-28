import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile, getUserStatus, updateUserStatus, savePhoto } from './../../redux/profile-reducer';
import { useLocation, useNavigate, useParams, } from "react-router-dom";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

    refreshProfile() {
        let id = this.props.router.params.userId;
        if (!id) {
            id = this.props.authorizedId;
        }

        this.props.getUserProfile(id);
        this.props.getUserStatus(id);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.router.params.userId !== this.props.router.params.userId) {
            this.refreshProfile();
        }
    }


    render() {
        return (
            <div>
                <Profile {...this.props} isOwner={!this.props.router.params.userId} />
            </div>
        )
    };
}

const mapStateToProps = (state) => {
    return {
        profile: state.profile.profile,
        authorizedId: state.auth.userId,
        userStatus: state.profile.userStatus
    }
};

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

export default compose(
    connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus, savePhoto }),
    withRouter,
    withAuthRedirect
)(ProfileContainer);