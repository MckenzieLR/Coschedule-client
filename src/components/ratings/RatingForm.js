import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createRating } from "../../managers/RatingManager";

export const RatingForm = () => {
  //set state for currentRating being created
  const [currentRating, setCurrentRating] = useState({
    rating: 0,
    story: 0,
    username: "",
  });

  //use useParams to navigate back to story being rated
  const { storyId } = useParams();
  const navigate = useNavigate();

  //set state of selected button
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    currentRating.rating = event.target.value;
    setCurrentRating(currentRating);
  };

  return (
    <form className="ratingForm">
      <h2 className="ratingForm__title">Rate Story</h2>

      <fieldset>
        <div className="form-group">
          <label>
            <input
              type="radio"
              value="1"
              name="radioGroup"
              checked={selectedOption === "1"}
              onChange={handleOptionChange}
            />
            1
          </label>
          <label>
            <input
              type="radio"
              value="2"
              name="radioGroup"
              checked={selectedOption === "2"}
              onChange={handleOptionChange}
            />
            2
          </label>
          <label>
            <input
              type="radio"
              value="3"
              name="radioGroup"
              checked={selectedOption === "3"}
              onChange={handleOptionChange}
            />
            3
          </label>
          <label>
            <input
              type="radio"
              value="4"
              name="radioGroup"
              checked={selectedOption === "4"}
              onChange={handleOptionChange}
            />
            4
          </label>
          <label>
            <input
              type="radio"
              value="5"
              name="radioGroup"
              checked={selectedOption === "5"}
              onChange={handleOptionChange}
            />
            5
          </label>
        </div>
      </fieldset>

      <button
        type="submit"
        onClick={(evt) => {
          evt.preventDefault();

          const rating = {
            rating: currentRating.rating,
            story: parseInt(storyId),
            username: currentRating.user_name,
          };

          createRating(rating).then(() => navigate(`/stories/${storyId}`));
        }}
        className="btn btn-primary button-17"
      >
        Add Rating
      </button>
    </form>
  );
};
