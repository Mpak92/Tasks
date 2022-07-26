import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../../redux/dialogs-reducer';
import NewMessage from './NewMessage';

const NewMessageContainer = (props) => {
    const state = props.store.getState();

    const addNewMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    };

    const onMessageChange = (text) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text));
    };

    return <NewMessage onMessageChange={onMessageChange} addNewMessage={addNewMessage} newMessageText={state.dialogs.newMessageText} />
};

export default NewMessageContainer;