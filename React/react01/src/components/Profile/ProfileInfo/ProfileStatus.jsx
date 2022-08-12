import React from 'react';
import info from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {
    state = {
        editMode: false
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
    }

    render() {
        return (
            <div>
                {!this.state.editMode
                    ? <div className={info.text}>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                    </div>
                    : <div className={info.textInput}>
                        <input type="text" value={this.props.status} onBlur={this.deactivateEditMode} autoFocus={true} />
                    </div>}
            </div>
        )
    }
}

export default ProfileStatus;