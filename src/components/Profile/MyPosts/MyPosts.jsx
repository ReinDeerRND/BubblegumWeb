import classes from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';
import {addPostActionCreator, updateNewTextActionCreator} from "../../../redux/reducers/profileReducer";


const MyPosts = (props) => {

  let postList = props.posts.map(post =>(<Post text={post.text} likesCount={post.likesCount} />))
  let newPostElement = React.createRef();
  let  addPost =()=>{
    props.dispatch(addPostActionCreator());
  }

  let onPostChange = ()=>{
    props.dispatch(updateNewTextActionCreator(newPostElement.current.value))
  }

  return (
    <div className={classes.posts_container}>
      <div >
        <h3>New Post</h3>
        <div className={classes.myposts_form}>
          <textarea ref={newPostElement} onChange={onPostChange} className={classes.mypost_textarea} 
          value = {props.newPostText} />
          <button onClick={addPost}>Add Post</button>
        </div>

      </div>
      <div>
       {postList}
      </div>
    </div>
  )
}
export default MyPosts;