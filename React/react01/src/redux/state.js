const ADD_POST = 'ADD-POST';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const store = {
    _state: {
        profile: {
            posts: [
                { id: 1, message: 'Hi!', likesCount: 3 },
                { id: 2, message: "It's my first post", likesCount: 25 }
            ],

            newPostText: ''
        },

        dialogs: {
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
        },

        navbar: {
            friends: [
                { id: 1, name: 'Andrew', ava: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg' },
                { id: 2, name: 'Nick', ava: 'https://vraki.net/sites/default/files/inline/images/2_3.png' },
                { id: 3, name: 'Sasha', ava: 'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg' },
                { id: 4, name: 'Viktor', ava: 'https://www.meme-arsenal.com/memes/b877babd9c07f94b952c7f152c4e264e.jpg' }
            ]
        }
    },

    _callSubscriber() {
        console.log('state changed');
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            const newPost = {
                id: 3,
                message: this._state.profile.newPostText,
                likesCount: 0
            };
        
            this._state.profile.posts.push(newPost);
            this._state.profile.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === ADD_MESSAGE) {
            const newMess = {
                id: 4,
                message: this._state.dialogs.newMessageText
            };
        
            this._state.dialogs.messages.push(newMess);
            this._state.dialogs.newMessageText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profile.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogs.newMessageText = action.newText;
            this._callSubscriber(this._state);
        }
    }
};

export const addPostActionCreator = () => {
    return { type: ADD_POST };
};

export const updateNewPostTextActionCreator = (text) => {
    return { 
        type: UPDATE_NEW_POST_TEXT, 
        newText: text 
    };
};

export const addMessageActionCreator = () => {
    return { type: ADD_MESSAGE };
};

export const updateNewMessageTextActionCreator = (text) => {
    return { 
        type: UPDATE_NEW_MESSAGE_TEXT, 
        newText: text 
    };
};

export default store;