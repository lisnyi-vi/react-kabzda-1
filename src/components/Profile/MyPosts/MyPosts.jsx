import React, {
  Component
} from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import {
  reduxForm,
  Field
} from "redux-form";
import {
  required,
  maxLengthCreator,
} from "../../../utils/validators/validators";
import {
  Textarea
} from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);



const MyPosts = React.memo((props) => {
  console.log("RENDER")
  let postsElements = props.postData.map((post) => (
    <Post key={post.id} message={post.message} likeCount={post.likeCount} />
  ));

  let onAddPost = (value) => {
    // alert(value.newPostText)
    props.addPost(value.newPostText);
  };

  return (
    <div className={classes.postsBlock}>
        <h3>My posts</h3>
        <div>
          <AddPostFormRedux onSubmit={onAddPost} />
    </div>
        <div className={classes.posts}>
      {postsElements}
    </div>
    </div>
  );
});

let AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
      component={Textarea}
      name="newPostText"
      validate={[required, maxLength10]}
      placeholder={"Post text"}
      />
    </div>
      <div>
        <button>Add post</button>
    </div>
    </form>
  );
};
let AddPostFormRedux = reduxForm({
  form: "profileAddNewPostForm"
})(
  AddNewPostForm
);

export default MyPosts;