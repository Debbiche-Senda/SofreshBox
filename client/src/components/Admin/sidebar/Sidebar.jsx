import React from 'react'
import "./Sidebar.css"
import BlurLinearIcon from '@mui/icons-material/BlurLinear';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import DynamicFeedOutlinedIcon from '@mui/icons-material/DynamicFeedOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ReportGmailerrorredOutlinedIcon from '@mui/icons-material/ReportGmailerrorredOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import {Link} from "react-router-dom"


function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className='sidebarTitle'> Dashboard </h3>
                    <ul className="sidebarList">
                        <Link to="/admin" className='link'>
                        <li className="sidebarListItem active">
                            <BlurLinearIcon className='sidebarIcon'/>
                            Home 
                        </li>
                        </Link>
                        <li className="sidebarListItem">
                            <TimelineIcon className='sidebarIcon'/>
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUpIcon className='sidebarIcon'/>
                            Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className='sidebarTitle'> Quick Menu </h3>
                    <ul className="sidebarList">
                        <Link to="/admin-dashboard-users" className='link'>
                        <li className="sidebarListItem active">
                            <PersonOutlineIcon className='sidebarIcon'/>
                            Users
                        </li>
                        </Link>
                        <Link to="admin-dashboard-products" className='link'>
                        <li className="sidebarListItem">
                            <Inventory2Icon className='sidebarIcon'/>
                            Products
                        </li>
                        </Link>
                        <li className="sidebarListItem">
                            <PaidOutlinedIcon className='sidebarIcon'/>
                            Transactions
                        </li>
                        <li className="sidebarListItem">
                            <BarChartOutlinedIcon className='sidebarIcon'/>
                            Reports
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className='sidebarTitle'> Notifications </h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <EmailOutlinedIcon className='sidebarIcon'/>
                            Mail
                        </li>
                        <li className="sidebarListItem">
                            <DynamicFeedOutlinedIcon className='sidebarIcon'/>
                            Feedback
                        </li>
                        <li className="sidebarListItem">
                            <ChatBubbleOutlineOutlinedIcon className='sidebarIcon'/>
                            Messages
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className='sidebarTitle'> Staff </h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <WorkOutlineOutlinedIcon className='sidebarIcon'/>
                            Manage
                        </li>
                        <li className="sidebarListItem">
                            <TimelineIcon className='sidebarIcon'/>
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <ReportGmailerrorredOutlinedIcon className='sidebarIcon'/>
                            reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
