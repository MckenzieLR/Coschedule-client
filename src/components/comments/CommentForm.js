import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createComment } from "../../managers/CommentManager";

export const CommentForm = () => {
  const [currentComment, setCurrentComment] = useState({
    content: "",
    story: 0,
    username: "",
  });

  const { storyId } = useParams();
  const navigate = useNavigate();

  const changeCommentState = (domEvent) => {
    const updatedComment = { ...currentComment };
    updatedComment[domEvent.target.id] = domEvent.target.value;
    setCurrentComment(updatedComment);
  };

  return (
    <form className="commentForm">
      <h2 className="commentForm__title">Create New Comment</h2>

      <fieldset>
        <div className="form-group">
          <label htmlFor="content">Comment: </label>
          <textarea
            type="text"
            className="form-control-content"
            name="content"
            id="content"
            required
            autoFocus
            defaultValue={currentComment.content}
            onChange={changeCommentState}
          />
        </div>
      </fieldset>

      <button
        type="submit"
        onClick={(evt) => {
          // Prevent form from being submitted
          evt.preventDefault();

          const comment = {
            content: currentComment.content,
            story: parseInt(storyId),
            username: currentComment.user_name,
          };

          // Send POST request to API
          createComment(comment).then(() => navigate(`/stories/${storyId}`));
        }}
        className="btn btn-primary button-17"
      >
        Post Comment
      </button>
    </form>
  );
};
