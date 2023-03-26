import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img src="https://lisnyi.com/assets/images/logo-3.png" alt="phot" />
      {props.message}
      <div>
        <span>{props.likeCount} like</span>
      </div>
    </div>
  );
};

export default Post;
