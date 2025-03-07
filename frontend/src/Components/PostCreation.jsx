import React from "react";

const PostCreation = ({ username, comment }) => {
  return (
    <form>
      <label>COMMENT: </label> <br />
      <input
        className="comments"
        type="text"
        placeholder="ENTER COMMENTS HERE!"
      ></input>
      <button>POST!</button>
    </form>
  );
};

export default PostCreation;
