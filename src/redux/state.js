// import {rerenderEntireTree} from "../render";

let rerenderEntireTree = ()=>{
    console.log("State changed")
}

let state = {
    profilePage: {
        posts: [
            { id: 0, text: "Post 1 About ocean", likesCount: 3 },
            { id: 1, text: "Post 2 About Sun", likesCount: 42 }
        ],
        newPostText: ""
    },
    messagePage: {
        dialogs: [
            { id: 0, name: 'Andrew' },
            { id: 1, name: 'Sveta' },
            { id: 2, name: 'Afina' },
            { id: 3, name: 'Guru' },
            { id: 4, name: 'Stranger' },
        ],
        messages: [
            { id: 0, userId: 0, text: "Hi! How are you?", income: true},
            { id: 1, userId: 0, text: "Hi! I am fine!", income: false },
            { id: 2, userId: 1, text: "Hi! How are your cat?", income: true}
        ]
    },
    friendsWidget: [
        {id: 2, name: "Yugor"},
        {id: 1, name: 'Sveta'},
        { id: 0, name: 'Andrew'},
    ]
};

export const addPost = ()=>{
    let post = {
        id: state.profilePage.posts.length,
        text: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(post);
    rerenderEntireTree(state);
}
export const updateNewPostText = (newText)=>{
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}
export const subscribe = (observer)=>{
    rerenderEntireTree = observer;
}
export default state;