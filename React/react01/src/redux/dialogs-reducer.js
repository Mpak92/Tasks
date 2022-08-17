const ADD_MESSAGE = 'ADD-MESSAGE';

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
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: 
            const newMess = {
                id: 4,
                message: action.newMessage
            };
    
            return {
                ...state,
                messages: [...state.messages, newMess],
            };

        default:
            return state;
    }
}

export const addMessageActionCreator = (text) => {
    return {
        type: ADD_MESSAGE,
        newMessage: text
    };
};

export default dialogsReducer;