const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initState = {
    posts: [
        { id: 0, text: "Post 1 About ocean", likesCount: 3 },
        { id: 1, text: "Post 2 About Sun", likesCount: 42 }
    ],
    newPostText: ""
};

const profileReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_POST:
            let post = {
                id: state.posts.length,
                text: state.newPostText,
                likesCount: 0
            };
            
            return {
                ...state,
                posts: [post, ...state.posts],
                newPostText: ""
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewTextActionCreator = (newText) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText });

export default profileReducer;