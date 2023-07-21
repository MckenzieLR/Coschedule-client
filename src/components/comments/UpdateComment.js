import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useParams } from "react-router-dom";
import { getComment, updateComment } from "../../managers/CommentManager";

export const CommentEdit = () => {
  const navigate = useNavigate();
  const { commentId } = useParams();

  //create comment state to display current comment being edited
  const [currentComment, setCurrentComment] = useState({
    id: 0,
    content: "",
    story: {},
  });

  //get individual comment to be edited & setCurrentComment state
  useEffect(() => {
    getComment(commentId).then(setCurrentComment);
  }, []);

  const changeCommentState = (domEvent) => {
    const copy = { ...currentComment };
    const modify = domEvent.target.id;
    copy[modify] = domEvent.target.value;
    setCurrentComment(copy);
  };

  return (
    <form className="commentForm">
      <h2 className="postForm__title">Edit Comment</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="content">Comment: </label>
          <textarea
            type="text"
            className="form-control-content"
            id="content"
            required
            autoFocus
            defaultValue={currentComment.content}
            onChange={changeCommentState}
          />
        </div>
      </fieldset>

      <button
        type="update"
        onClick={(evt) => {
          evt.preventDefault();

          const comment = {
            id: currentComment.id,
            content: currentComment.content,
            story: currentComment.story.id,
          };

          updateComment(comment).then(() => navigate(`/stories`));
        }}
        className="btn btn-primary"
      >
        Update Comment
      </button>
    </form>
  );
};
