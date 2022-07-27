import { connect } from 'react-redux';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../../redux/dialogs-reducer';
import NewMessage from './NewMessage';

const mapStateToProps = (state) => {
    return {
        newMessageText: state.dialogs.newMessageText
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onMessageChange: (text) => {
            dispatch(updateNewMessageTextActionCreator(text));;
        },
        addNewMessage: () => {
            dispatch(addMessageActionCreator());
        }
    }
};

const NewMessageContainer = connect(mapStateToProps, mapDispatchToProps)(NewMessage);

export default NewMessageContainer;