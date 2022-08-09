import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile } from './../../redux/profile-reducer';
import { useLocation, useNavigate, useParams, } from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount() {
        this.props.getUserProfile(this.props.router.params.userId, this.props.authorizedId);
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

export default connect(mapStateToProps, { getUserProfile })(withRouter(ProfileContainer));
