import React from 'react';
import './topbar.css';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import image from "./images/profile pic.jpg";
const Topbar=()=>{
    return (
      <div className='topbar'>

        <div className='toppbarWrapper'>
        <div className='topLeft'>
          <span className='logo'>ADMIN</span>
          
        </div>
        <div className='topRight'>
          <div className="topbarIconsContainer">
            <NotificationsIcon/>
            <span className="topIconbadge">2</span>

          </div>
          <div className="topbarIconsContainer">
            <LanguageIcon/>
            <span className="topIconbadge">2</span>

          </div>
          <div className="topbarIconsContainer">
            <SettingsIcon/>
            

          </div> 
          <img src={image}cd alt="" className='topAvatar'/>

        </div>
        </div>
          
      </div>
    )
  
  }
  
  export default Topbar;
