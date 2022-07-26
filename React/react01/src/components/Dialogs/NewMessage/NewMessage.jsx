import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../../redux/dialogs-reducer';
import newmess from './NewMessage.module.css';


const NewMessage = (props) => {
    const addNewMessage = () => {
        props.dispatch(addMessageActionCreator());
    };

    const onMessageChange = (e) => {
        const text = e.target.value;
        props.dispatch(updateNewMessageTextActionCreator(text));
    };

    return (
        <div className={newmess.newMessage}>
            <textarea placeholder='Отправить новое сообщение'
                value={props.newMessageText}
                onChange={onMessageChange} />
            <button onClick={addNewMessage}>SEND</button>
        </div>
    )
};

export default NewMessage;