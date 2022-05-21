import { Link } from "react-router-dom";
import "./topbar.css";

export default function Topbar() {
  const currentUser = false;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook"></i>
        <i className="topIcon fa-brands fa-twitter"></i>
        <i className="topIcon fa-brands fa-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/about" className="link">
              About
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/contact" className="link">
              Conatct
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/write" className="link">
              Write
            </Link>
          </li>
          <li className="topListItem">{currentUser && "Logout"}</li>
        </ul>
      </div>
      <div className="topRight">
        {currentUser ? (
          <img
            className="topImage"
            src="https://imgs.search.brave.com/hqxQc7jW5ZwROjC2cGBodjX1VryuvkBjk96cVWB6_v8/rs:fit:256:256:1/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL2ZyZWUv/cG5nLTI1Ni9hdmF0/YXItMzcwLTQ1NjMy/Mi5wbmc"
            alt=""
          />
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link to="/login" className="link">
                Login
              </Link>
            </li>
            <li className="topListItem">
              <Link to="/register" className="link">
                Register
              </Link>
            </li>
          </ul>
        )}

        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
