import DiaCont from './DialogsContent/DiaCont';
import newmess from './NewMessage.module.css';
import { useForm } from "react-hook-form";

const NewMessage = (props) => {
    const messagesElems = props.messages.map(mess => <DiaCont message={mess.message} key={mess.id} />);

    return (
        <div>
            <div className={newmess.messages}>
                {messagesElems}
            </div>
            <NewMessageForm addNewMessage={props.addNewMessage} />
        </div>
    )
};

const NewMessageForm = (props) => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        props.addNewMessage(data.newMessage);
        reset()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
           <div className={newmess.newMessage}>
                <textarea {...register('newMessage')} placeholder='Отправить новое сообщение' />
                <button>SEND</button>
            </div>
        </form>
    );
}

export default NewMessage;