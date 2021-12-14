import React from 'react';
import { addPostActionCreator, updateNewTextActionCreator } from "../../../redux/reducers/profileReducer";
import MyPosts from './MyPosts';


const MyPostsContainer = (props) => {
  let profilePage = props.store.getState().profilePage;
  
  let posts = profilePage.posts;
  let newPostText = profilePage.newPostText;

  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  }

  let updateNewPostText = (text) => {
    props.store.dispatch(updateNewTextActionCreator(text))
  }

  return (
    <MyPosts
      updateNewPostText={updateNewPostText}
      addPost={addPost}
      posts={posts}
      newPostText={newPostText}
    />)
}
export default MyPostsContainer;