import classes from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';
import { Field, reduxForm } from 'redux-form';

const MyPosts = (props) => {

  let postList = props.posts.map(post => (<Post key={post.id} text={post.text} likesCount={post.likesCount} />))
  let onSubmit = (newPost) => {
    props.addPost(newPost.newPost);
  }

  return (
    <div className={classes.posts_container}>
      <div >
        <h3>Create New Post</h3>
        <NewPostFormRedux onSubmit={onSubmit} />
      </div>
      <div>
        {postList}
      </div>
    </div>
  )
}

const NewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={classes.myposts_form}>
        <Field component="textarea" name="newPost" className={classes.mypost_textarea} />
        <button type="submit">Add Post</button>
      </div>
    </form>
  )
}

const NewPostFormRedux = reduxForm({ form: "newPost" })(NewPostForm);

export default MyPosts;