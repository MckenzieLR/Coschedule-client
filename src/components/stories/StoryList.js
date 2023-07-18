import { useState } from "react";
import { getStories } from "../../managers/StoryManger";
import { useEffect } from "react";

export const StoryList = () => {
    const [stories, setStories] = useState([]);

    useEffect(() => {
        getStories().then(setStories);
    }, []);
    
    return <div>
        {
            stories.map((story) => (
                <tbody key={story.id}>
                    <div>{story.title}</div>
                    <div>By: {story.by}</div>
                    <div>{story.url}</div>
                 </tbody>))
        }
        </div>
}

