import { useEffect, useState } from "react";
import { deleteComment, getComments } from "../../managers/CommentManager";
import { useNavigate } from "react-router-dom";

export const CommentList = () => {
  const [comments, setComments] = useState([]);
  const navigate = useNavigate();

  //with useEffect get all comments with getComments function from commentManager and setComments state
  useEffect(() => {
    getComments().then(setComments);
  }, []);

  //create function to update comment list when comment is deleted
  const updateCommentList = () => {
    getComments().then(setComments);
  };

  //map over comments to list each comment with comment details

  return (
    <div>
      {comments.map((comment) => (
        <tbody key={comment.id}>
          <div>Comment: {comment.content}</div>
          <div>Story: {comment?.story?.title}</div>
          <div>By: {comment.user_name}</div>
          <td>
            <center>
              <button
                className="commentButton "
                onClick={() => {
                  navigate({ pathname: `/comments/${comment.id}/edit` });
                }}
              >
                Edit
              </button>
            </center>
          </td>
          <td>
            <center>
              <button
                className="button-17 commentButton"
                onClick={(evt) => {
                  evt.preventDefault();
                  const commentDel = {
                    id: parseInt(comment.id),
                  };
                  deleteComment(commentDel).then(() => updateCommentList());
                }}
              >
                Delete
              </button>
            </center>
          </td>
        </tbody>
      ))}
    </div>
  );
};
