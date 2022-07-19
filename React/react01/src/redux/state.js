const state = {
    profile: {
        posts: [
        { id: 1, message: 'Hi!', likesCount: 3 },
        { id: 2, message: "It's my first post", likesCount: 25 },
        ]
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
        ]
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

export default state;