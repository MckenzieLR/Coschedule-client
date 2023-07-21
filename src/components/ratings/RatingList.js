import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteRating, getRatings } from "../../managers/RatingManager";

export const RatingList = () => {
  const [ratings, setRating] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getRatings().then(setRating);
  }, []);

  const updateRatingList = () => {
    getRatings().then(setRating);
  };

  return (
    <div>
      {ratings.map((rating) => (
        <tbody key={rating.id}>
          <div>Rating: {rating.rating}</div>
          <div>By: {rating.user_name}</div>
          <td>
            <center>
              <button
                className="ratingButton "
                onClick={() => {
                  navigate({ pathname: `/ratings/${rating.id}/edit` });
                }}
              >
                Edit
              </button>
            </center>
          </td>
          <td>
            <center>
              <button
                className="ratingDel"
                onClick={(evt) => {
                  evt.preventDefault();
                  const ratingDel = {
                    id: parseInt(rating.id),
                  };
                  deleteRating(ratingDel).then(() => updateRatingList());
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
