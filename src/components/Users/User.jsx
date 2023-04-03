import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Users.module.css";

let User = ({ user, followingInProgres, key, unfollow, follow }) => {
  return (
    <div key={key}>
      <span>
        <div>
          <NavLink to={"/profile/" + user.id}>
            <img
              src={
                user.photos.small != null
                  ? user.photos.small
                  : "https://upload.wikimedia.org/wikipedia/commons/4/41/Profile-720.png"
              }
              className={classes.userPhoto}
              alt="profile-phot"
            />
          </NavLink>
        </div>
        <div>
          {user.followed ? (
            <button
              disabled={followingInProgres.some((id) => id === user.id)}
              onClick={() => {
                unfollow(user.id);
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={followingInProgres.some((id) => id === user.id)}
              onClick={() => {
                follow(user.id);
              }}
            >
              Follow
            </button>
          )}
        </div>
      </span>
      <span>
        <span>
          <div>{user.name}</div>
          <div>{user.status}</div>
        </span>
        <span>
          <div>{"u.location.city"}</div>
          <div>{"u.location.country"}</div>
        </span>
      </span>
    </div>
  );
};

export default User;
