import React from 'react';
import './widgetSm.css';
import VisibilityIcon from '@mui/icons-material/Visibility';
const widgetSm=()=>{
    return (
        <>
        <div className='widgetSm'>
            <span className="widgetSmtitle">New Join Members</span>
            <ul className="widgetSmlist">
                <li className="widgetSmListItem">
                    <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="widgetSmimg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">
                            Eshan 
                        </span>
                        <span className="widgetUsername Title">
                            Software Engineering
                        </span>

                    </div>
                    <button className="widgetSmButton">
                        <VisibilityIcon className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
            </ul>


        </div>
        </>
    )
}
export default widgetSm;