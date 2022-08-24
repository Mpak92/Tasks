import profileReducer, { addPostActionCreator, deletePost } from './profile-reducer';

const state = {
    posts: [
        { id: 1, message: 'Hi!', likesCount: 3 },
        { id: 2, message: "It's my first post", likesCount: 25 }
    ]
};

test('length of posts should be incremented', () => {
    const action = addPostActionCreator('hello');
    const newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(3);
});

test('message of new post should be added', () => {
    const action = addPostActionCreator('hello');
    const newState = profileReducer(state, action);
    expect(newState.posts[2].message).toBe('hello');
});

test('length of posts should be decremented', () => {
    const action = deletePost(2);
    const newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(1);
});
