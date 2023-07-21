import { Route, Routes } from "react-router-dom";
import { Login } from "./components/auth/login";
import { UserRegister } from "./components/auth/register";
import { NavBar } from "./nav/NavBar";
import { ApplicationViews } from "./views/ApplicationViews";

export const CodeChallenge = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<UserRegister />} />

      <Route
        path="*"
        element={
          <>
            <NavBar />
            <ApplicationViews />
          </>
        }
      />
    </Routes>
  );
};
