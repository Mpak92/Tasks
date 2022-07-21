import { rerenderEntireTree } from "../render";

const state = {
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
}

export const addPost = () => {
    const newPost = {
        id: 3,
        message: state.profile.newPostText,
        likesCount: 0
    };

    state.profile.posts.push(newPost);
    state.profile.newPostText = '';
    rerenderEntireTree(state);
};

export const addMessage = () => {
    const newMess = {
        id: 4,
        message: state.dialogs.newMessageText
    };

    state.dialogs.messages.push(newMess);
    state.dialogs.newMessageText = '';
    rerenderEntireTree(state);
};

export const updateNewPostText = (newText) => {
    state.profile.newPostText = newText;
    rerenderEntireTree(state);
};

export const updateNewMessageText = (newText) => {
    state.dialogs.newMessageText = newText;
    rerenderEntireTree(state);
}

export default state;