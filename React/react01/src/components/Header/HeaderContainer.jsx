import * as axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { setUserData, toggleIsFetching } from './../../redux/auth-reducer';
import Header from './Header';

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                this.props.toggleIsFetching(false);
                if (response.data.resultCode === 0) {
                    const {id, email, login} = {...response.data.data};
                    this.props.setUserData(id, email, login);
                }
            });
    }

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
};

export default connect(mapStateToProps, { setUserData, toggleIsFetching })(HeaderContainer);