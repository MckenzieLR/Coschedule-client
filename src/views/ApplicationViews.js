import { UserRegister } from "../components/auth/register";
import { StoryList } from "../components/stories/StoryList";
import { Outlet, Route, Routes } from "react-router-dom";
import { Login } from "../components/auth/login";
import { CommentList } from "../components/comments/CommentList";
import { CommentForm } from "../components/comments/CommentForm";
import { CommentEdit } from "../components/comments/UpdateComment";
import { StoryDetails } from "../components/stories/StoryDetails";
import { RatingList } from "../components/ratings/RatingList";
import { RatingForm } from "../components/ratings/RatingForm";

export const ApplicationViews = ({ token, setToken }) => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route
          path="/userRegister"
          element={<UserRegister setToken={setToken} />}
        />
        <Route path="/stories" element={<StoryList />} />
        <Route path="/stories/:storyId" element={<StoryDetails />} />
        <Route path="/comments" element={<CommentList />} />
        <Route path="/comments/:storyId/new" element={<CommentForm />} />
        <Route path="/comments/:commentId/edit" element={<CommentEdit />} />
        <Route path="/ratings" element={<RatingList />} />
        <Route path="/ratings/:storyId/new" element={<RatingForm />} />
      </Routes>
    </>
  );
};
