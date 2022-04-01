import React from 'react';
import "./sidebar.css";
import LineStyleIcon from '@mui/icons-material/LineStyle';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import {NavLink}from 'react-router-dom';





const Sidebar=()=>{
    return (
        <>
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className='listitem'>
                            <LineStyleIcon className="sidebaricons"/>
                            Home

                        </li>
                        <li className='listitem'>
                            <NavLink to = "/users">
                            <AnalyticsIcon className="sidebaricons"/>
                            Users
                            </NavLink>

                        </li>
                        <li className='listitem'>
                            <NavLink to = "/products">
                            <MonetizationOnIcon className="sidebaricons"/>
                            Products
                            </NavLink>

                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )


}
export default Sidebar;