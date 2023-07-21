import { Link, useNavigate } from "react-router-dom";
import { getStories } from "../../managers/StoryManger";
import { useEffect, useState } from "react";

export const StoryList = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    getStories().then(setStories);
  }, []);

  return (
    <>
      <div>
        {" "}
        Top 10 Stories
        {stories.map((story) => (
          <tbody key={story.id}>
            <div>
              Title: <Link to={`/stories/${story.id}`}> {story.title} </Link>{" "}
            </div>
          </tbody>
        ))}
      </div>
    </>
  );
};
