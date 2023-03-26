import React from 'react';
import {NavLink} from "react-router-dom"
import classes from './Navbar.module.css'

const Navbar = () => {
  return (      
    <nav className={classes.nav}>
        <div className={`${classes.item}`}><NavLink to="/profile/*" className={({ isActive }) =>
              isActive ? classes.activeLink : null
            }>Profile</NavLink></div>
        <div className={classes.item}><NavLink to="/dialogs" className={({ isActive }) =>
              isActive ? classes.activeLink : null
            }>Messages</NavLink></div>
        <div className={classes.item}><NavLink to="/users" className={({ isActive }) =>
              isActive ? classes.activeLink : null
            }>Users</NavLink></div>
        <div className={classes.item}><a>News</a></div>
        <div className={classes.item}><a>Music</a></div>
        <div className={classes.item}><a>Settings</a></div>
    </nav>)
}

export default Navbar;