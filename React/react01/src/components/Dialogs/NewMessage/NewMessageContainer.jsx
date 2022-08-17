import { connect } from 'react-redux';
import { addMessageActionCreator } from '../../../redux/dialogs-reducer';
import NewMessage from './NewMessage';

const mapStateToProps = (state) => {
    return {
        messages: state.dialogs.messages,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addNewMessage: (text) => {
            dispatch(addMessageActionCreator(text));
        }
    }
};

const NewMessageContainer = connect(mapStateToProps, mapDispatchToProps)(NewMessage);

export default NewMessageContainer;