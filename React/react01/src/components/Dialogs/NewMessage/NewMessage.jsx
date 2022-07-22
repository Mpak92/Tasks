import React from 'react';
import newmess from './NewMessage.module.css';

const NewMessage = (props) => {
    const newMessageElement = React.createRef();

    const addNewMessage = () => {
        props.dispatch({ type: 'ADD-MESSAGE' });
    };

    const onMessageChange = () => {
        const text = newMessageElement.current.value;
        props.dispatch({ type: 'UPDATE-NEW-MESSAGE-TEXT', newText: text });
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