import React from 'react'
import "./Topbar.css"
import  NotificationsIcon  from '@mui/icons-material/Notifications';
import Language from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';

function Topbar() {
    return (
        <div className='topbar'>
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className='logo'> Admin dashboard</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsIcon/>
                        <span className='topIconBadge'>2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language/>
                        <span className='topIconBadge'>2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <SettingsIcon/>
                    </div>
                    <img src="https://myr.com.br/wp-content/uploads/2013/04/Dashboard-logo21.png" alt=" Dashboard logo" className="topAvatar" />
                </div>
            </div> 
        </div>
    )
}

export default Topbar
