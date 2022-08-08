import React from 'react';
import { connect } from 'react-redux';
import { authMe } from '../../API/api';
import { setUserData, toggleIsFetching } from './../../redux/auth-reducer';
import Header from './Header';

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        authMe().then(data => {
                this.props.toggleIsFetching(false);
                if (data.resultCode === 0) {
                    const {id, email, login} = {...data.data};
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