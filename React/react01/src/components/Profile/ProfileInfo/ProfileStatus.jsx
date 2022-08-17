import React from 'react';
import info from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        userStatus: this.props.userStatus
    }
    
    activateEditMode = () => {
        this.setState({
            editMode: true
        });
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateUserStatus(this.state.userStatus);
    }

    onStatusChange = (e) => {
        this.setState({
            userStatus: e.currentTarget.value
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.userStatus !== this.props.userStatus) {
            this.setState({
                userStatus: this.props.userStatus
            })
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode
                    ? <div className={info.text}>
                        <span onDoubleClick={this.activateEditMode}>{this.props.userStatus || '-----'}</span>
                    </div>
                    : <div className={info.textInput}>
                        <input type="text" value={this.state.userStatus} onBlur={this.deactivateEditMode} autoFocus={true} onChange={this.onStatusChange} />
                    </div>}
            </div>
        )
    }
}

export default ProfileStatus;