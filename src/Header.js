import React , {useState}from "react";
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';


function Header() {
  const [inputSearch, setInputSearch] = useState('');
  return (
    <div className = "header">
      <div className = "header__left">
      < MenuIcon />
        <img
        className="header__logo" 
        src ="https://upload.wikimedia.org/wikipedia/commons/0/05/Logo_of_YouTube_%282006-2011%29.svg" 
        alt=""
         />
      </div>

      <div className = "header__input">
      <input value={inputSearch} placeholder="Search" type="text"/>
      <SearchIcon className="header__inputButton" />
      </div>

      <div className="header__icons">
      <VideoCallIcon className="header_icon"/>
         <AppsIcon className="header_icon"/>
         <NotificationsIcon className="header_icon" />
         <Avatar 
         alt="Pavitra Dasari"
         src="https://ibb.co/1f8dnY8"/>
      </div>
    </div>
  )
}

export default Header