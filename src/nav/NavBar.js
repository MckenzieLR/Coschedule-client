import { Link, useNavigate } from "react-router-dom";

export const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div>
      {localStorage.getItem("storyuser") !== null ? (
        <>
          <a className="nav-item">
            <Link className="nav-link" to="/stories">
              {" "}
              Home
            </Link>
          </a>
          <a className="nav-item">
            <button
              className="nav-link fakeLink button-17 logoutButton"
              onClick={() => {
                localStorage.removeItem("storyuser");
                navigate("/login");
              }}
            >
              Logout
            </button>
          </a>
        </>
      ) : (
        <>
          <a className="nav-item ">
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </a>
        </>
      )}
    </div>
  );
};
