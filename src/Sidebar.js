import React from "react";
import "./Sidebar.css";
import Avatar from "@mui/material/Avatar";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";

function Sidebar() {
  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://media.istockphoto.com/id/1071588902/photo/abstract-blurred-gradient-background-in-bright-colors-colorful-smooth-illustration.jpg?b=1&s=170667a&w=0&k=20&c=7xE95vYr-sUKZMS3p-JyM1fheZVQs3DqpoGgc51yamw="
          alt=""
        />
        <Avatar className="sidebar__avatar" src={user.photoUrl}>
          {user.displayName[0].toUpperCase()}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,365</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">1,242</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("software_engineering")}
        {recentItem("javascript")}
      </div>
    </div>
  );
}

export default Sidebar;
