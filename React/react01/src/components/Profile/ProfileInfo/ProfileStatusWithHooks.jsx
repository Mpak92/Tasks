import { useState } from 'react';
import info from './ProfileInfo.module.css';

const ProfileStatusWithHooks = (props) => {
    
    const [editMode, setEditMode] = useState(false);
    const [userStatus, setUserStatus] = useState(props.userStatus);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateUserStatus(userStatus);
    }

    const onStatusChange = (e) => {
        setUserStatus(e.currentTarget.value);
    }

    return (
        <div>
            {!editMode
                ? <div className={info.text}>
                    <span onDoubleClick={activateEditMode}>{props.userStatus || '-----'}</span>
                </div>
                : <div className={info.textInput}>
                    <input type="text" value={userStatus} onBlur={deactivateEditMode} autoFocus={true} onChange={onStatusChange} />
                </div>}
        </div>
    )
}

export default ProfileStatusWithHooks;