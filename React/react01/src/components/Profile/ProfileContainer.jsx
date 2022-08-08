import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setUserProfile } from './../../redux/profile-reducer';
import { useLocation, useNavigate, useParams, } from "react-router-dom";
import { getUserById } from '../../API/api';

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId;
        if (!userId) {
            this.props.authorizedId ? userId = this.props.authorizedId : userId = 2
        }
        getUserById(userId).then(data => {
                this.props.setUserProfile(data);
            });
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
        authorizedId: state.auth.userId
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

export default connect(mapStateToProps, { setUserProfile })(withRouter(ProfileContainer));
