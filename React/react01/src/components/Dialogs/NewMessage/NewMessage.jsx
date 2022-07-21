import React from 'react';
import newmess from './NewMessage.module.css';
import { updateNewPostText } from './../../../redux/state';

const NewMessage = (props) => {
    const newMessageElement = React.createRef();

    const addNewMessage = () => {
        props.addMessage();
    };

    const onMessageChange = () => {
        const text = newMessageElement.current.value;
        props.updateNewMessageText(text);
    };

    return (
        <div className={newmess.newMessage}>
            <textarea placeholder='Отправить новое сообщение'
                ref={newMessageElement}
                value={props.newMessageText}
                onChange={onMessageChange} />
            <button onClick={addNewMessage}>SEND</button>
        </div>
    )
};

export default NewMessage;