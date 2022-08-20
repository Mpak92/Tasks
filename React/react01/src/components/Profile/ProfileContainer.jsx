import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile, getUserStatus, updateUserStatus } from './../../redux/profile-reducer';
import { useLocation, useNavigate, useParams, } from "react-router-dom";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

    componentDidMount() {
        let id = this.props.router.params.userId;
        if (!id) {
            id = this.props.authorizedId;
        }

        this.props.getUserProfile(this.props.router.params.userId, this.props.authorizedId);
        this.props.getUserStatus(id);
    }

    render() {
        return (
            <div>
                <Profile {...this.props} />
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
    connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus }),
    withRouter,
    withAuthRedirect
)(ProfileContainer);