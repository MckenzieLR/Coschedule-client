export const getStories = () => {
  return fetch("http://localhost:8000/stories", {
    headers: {
      Authorization: `Token ${localStorage.getItem("storyuser")}`,
    },
  }).then((response) => response.json());
};

export const getStoryById = (id) => {
  return fetch(`http://localhost:8000/stories/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Token ${localStorage.getItem("storyuser")}`,
    },
  }).then((response) => response.json());
};
