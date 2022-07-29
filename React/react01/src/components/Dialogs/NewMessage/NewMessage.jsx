import DiaCont from './DialogsContent/DiaCont';
import newmess from './NewMessage.module.css';

const NewMessage = (props) => {
    const addNewMessage = () => {
        props.addNewMessage();
    };

    const onMessageChange = (e) => {
        const text = e.target.value;
        props.onMessageChange(text);
    };

    const messagesElems = props.messages.map(mess => <DiaCont message={mess.message} key={mess.id} />);

    return (
        <div>
            <div className={newmess.messages}>
                {messagesElems}
            </div>
            <div className={newmess.newMessage}>
                <textarea placeholder='Отправить новое сообщение'
                    value={props.newMessageText}
                    onChange={onMessageChange} />
                <button onClick={addNewMessage}>SEND</button>
            </div>
        </div>
    )
};

export default NewMessage;