import React from "react";
import PostCreation from "./PostCreation";
export const Post = ({ post, index }) => {
  function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function generateExclamation() {
    let x = randomInteger(3, 5);
    let str = "";
    for (let i = 0; i < x; i++) {
      str = str + "!";
    }
    console.log(str);
    return str;
  }
  return (
    <div className="card">
      <div>
        <h2>{post.user}</h2>
        <h3>{post.body}</h3>
        <p>{post.comments}</p>
        <p>{generateExclamation()}</p>
      </div>
      <PostCreation username="true" comment="false" />
    </div>
  );
};
