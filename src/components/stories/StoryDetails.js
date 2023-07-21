import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getStoryById } from "../../managers/StoryManger";
import { deleteComment } from "../../managers/CommentManager";
import { deleteRating } from "../../managers/RatingManager";

export const StoryDetails = () => {
  const [story, setStory] = useState({});
  const { storyId } = useParams();
  const navigate = useNavigate();

  const updateStory = () => {
    getStoryById(storyId).then(setStory);
  };

  useEffect(() => {
    getStoryById(storyId).then((data) => {
      setStory(data);
    });
  }, [storyId]);

  //return story details including comments & ratings for each story based on related_name & if array contains objects
  return (
    <>
      <h1 className="storyTitle"> {story.title}</h1>
      <div>By: {story.by}</div>
      <div>URL: {story.url}</div>
      {story?.story_comment?.map((comment) => {
        return (
          <>
            <div>Comment: {comment.content} </div>
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
                  className="commentButton"
                  onClick={(evt) => {
                    evt.preventDefault();
                    const commentDel = {
                      id: parseInt(comment.id),
                    };
                    deleteComment(commentDel).then(() => updateStory());
                  }}
                >
                  Delete
                </button>
              </center>
            </td>
          </>
        );
      })}
      {story?.story_rating?.map((rating) => {
        return (
          <>
            <div>Rating:{rating.rating} </div>
            <td>
              <center>
                <button
                  className="ratingDel"
                  onClick={(evt) => {
                    evt.preventDefault();
                    const ratingDel = {
                      id: parseInt(rating.id),
                    };
                    deleteRating(ratingDel).then(() => updateStory());
                  }}
                >
                  Delete
                </button>
              </center>
            </td>
          </>
        );
      })}
      <td>
        <center>
          <button
            className="new_comment"
            onClick={() => {
              navigate({ pathname: `/comments/${story.id}/new` });
            }}
          >
            Add a comment
          </button>
        </center>
      </td>
      <td>
        <center>
          <button
            className="new_rating"
            onClick={() => {
              navigate({ pathname: `/ratings/${story.id}/new` });
            }}
          >
            Rate Story
          </button>
        </center>
      </td>
    </>
  );
};
