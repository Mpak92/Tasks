import React from 'react';
import { connect } from 'react-redux';
import { logout } from './../../redux/auth-reducer';
import Header from './Header';

class HeaderContainer extends React.Component {

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
};

export default connect(mapStateToProps, { logout })(HeaderContainer);