const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const initialState = {
    dialogs: [
        { id: 1, name: 'Andrew', ava: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg' },
        { id: 2, name: 'Nick', ava: 'https://vraki.net/sites/default/files/inline/images/2_3.png' },
        { id: 3, name: 'Sasha', ava: 'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg' },
        { id: 4, name: 'Viktor', ava: 'https://www.meme-arsenal.com/memes/b877babd9c07f94b952c7f152c4e264e.jpg' }
    ],

    messages: [
        { id: 1, message: 'Hi!' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'Goodbye!' },
    ],

    newMessageText: ''
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const newMess = {
                id: 4,
                message: state.newMessageText
            };
    
            state.messages.push(newMess);
            state.newMessageText = '';
            return state;

        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;

        default:
            return state;
    }
}

export const addMessageActionCreator = () => {
    return { type: ADD_MESSAGE };
};

export const updateNewMessageTextActionCreator = (text) => {
    return { 
        type: UPDATE_NEW_MESSAGE_TEXT, 
        newText: text 
    };
};

export default dialogsReducer;