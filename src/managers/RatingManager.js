export const getRatings = () => {
  return fetch("http://localhost:8000/ratings", {
    headers: {
      Authorization: `Token ${localStorage.getItem("storyuser")}`,
    },
  }).then((response) => response.json());
};

export const deleteRating = (rating) => {
  return fetch(`http://localhost:8000/ratings/${rating.id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Token ${localStorage.getItem("storyuser")}`,
    },
  });
};

export const createRating = (newRatingObject) => {
  return fetch("http://localhost:8000/ratings", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Token ${localStorage.getItem("storyuser")}`,
    },
    body: JSON.stringify(newRatingObject),
  }).then((response) => response.json());
};
