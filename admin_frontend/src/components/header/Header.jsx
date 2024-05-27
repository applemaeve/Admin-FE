import "./header.css";
import { BsList } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import Dropdown from "../dropdown/Dropdown";
import { Link } from "react-router-dom";
import user_image from "../header/UserAfatar.jpg";

const user_menu = [
  {
    content: "Dashboard",
    path: "/admin/dashboard",
  },
  {
    content: "Profile",
    path: "/admin/profile",
  },
  {
    content: "Logout",
    path: "/logout",
  },
];

const renderUserToggle = (user) => (
  <div className="topnav__right-user">
    <div className="topnav__right-user__image">
      <img src={user_image} alt="" />
    </div>
    <div className="topnav__right-user__name">{user.first_Name} {user.last_Name}</div>
  </div>
);

const renderUserMenu = (item, index) => (
  <Link to={item.path} key={index}>
    <div className="userMenue-item">
      <span>{item.content}</span>
    </div>
  </Link>
);

const Header = () => {
  const userData = {
    first_Name: "John",
    last_Name: "Doe",
  };

  return (
    <div className="header">
      <div className="content">
        <a href="#BsList">
          {" "}
          <BsList />{" "}
        </a>
        <div className="headerRight">
          <div className="headerSearch">
            <BiSearch />
            <input type="text" placeholder="Search" />
          </div>
          <div className="headerItems">
            <Dropdown
              customToggle={() => renderUserToggle(userData)}
              contentData={user_menu}
              renderItems={(item, index) => renderUserMenu(item, index)}
            />
          </div>
        </div>
      </div>
      <div className="third-row">
        <h3>Welcome Back, {userData.first_Name}</h3>
      </div>
    </div>
  );
};

export default Header;
