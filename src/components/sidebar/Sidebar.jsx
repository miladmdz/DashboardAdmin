import React, { useEffect, useRef, useState } from 'react'
import "./Sidebar.css"
import LinestyleIcon from "@mui/icons-material/LineStyle"
import TimeLineIcon from "@mui/icons-material/Timeline"
import TrendingUpIcon from "@mui/icons-material/TrendingUp"
import PermIdentityIcon from "@mui/icons-material/PermIdentity"
import StorefrontIcon from "@mui/icons-material/Storefront"
import AttachMoneyIcon from "@mui/icons-material/AttachMoney"
import BarChartIcon from "@mui/icons-material/BarChart"
import MailOutlineIcon from "@mui/icons-material/MailOutline"
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed"
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ReportIcon from '@mui/icons-material/Report';
import { Link, NavLink, useParams, useSearchParams } from 'react-router-dom'

function Sidebar() {

    const [clickHandler,setClickHandler]=useState(false)
    const liElem=useRef()

    const clickHandlerFunc=(e)=>{
        liElem.current.innerHTML="sidebarListItem"
        e.target.classList.add("active")
    }
    
    useEffect(()=>{
        

    },[clickHandler])





  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <NavLink to={"/"} className={(link)=>link.isActive ? "Link active" :"Link"}>
                    <li className="sidebarListItem">
                        <LinestyleIcon className='sidebarIcon'/>
                        Home
                    </li>
                    </NavLink>
                    <NavLink to={"/analytics"} className={(link)=>link.isActive ? "Link active" :"Link"}>
                    <li className="sidebarListItem">
                        <TimeLineIcon className='sidebarIcon'/>
                        Analytics
                    </li>
                    </NavLink>
                    <NavLink to={"/sales"} className={(link)=>link.isActive ? "Link active" :"Link"}>
                    <li className="sidebarListItem">
                        <TrendingUpIcon className='sidebarIcon'/>
                        Sales
                    </li>
                    </NavLink>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Quick Menu</h3>
                <ul className="sidebarList">
                    <NavLink to={"/users"} className={(link)=>link.isActive ? "Link active" :"Link"}>
                    <li className="sidebarListItem">
                        <PermIdentityIcon className='sidebarIcon'/>
                        Users
                    </li>
                    </NavLink>
                    <NavLink to={"/newUser"} className={(link)=>link.isActive ? "Link active" :"Link"}>
                    <li className="sidebarListItem">
                        <PermIdentityIcon className='sidebarIcon'/>
                        New User
                    </li>
                    </NavLink>
                    <NavLink to={"/products"} className={(link)=>link.isActive ? "Link active" :"Link"}>
                    <li className="sidebarListItem">
                        <StorefrontIcon className='sidebarIcon'/>
                        Products
                    </li>
                    </NavLink>
                    <NavLink to={"/transaction"} className={(link)=>link.isActive ? "Link active" :"Link"}>
                    <li className="sidebarListItem">
                        <AttachMoneyIcon className='sidebarIcon'/>
                        Transaction
                    </li>
                    </NavLink>
                    <NavLink to={"/reports"} className={(link)=>link.isActive ? "Link active" :"Link"}>
                    <li className="sidebarListItem">
                        <BarChartIcon className='sidebarIcon'/>
                        Reports
                    </li>
                    </NavLink>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Notifications</h3>
                <ul className="sidebarList">
                <NavLink to={"/mail"} className={(link)=>link.isActive ? "Link active" :"Link"}>
                    <li className="sidebarListItem">
                        <MailOutlineIcon className='sidebarIcon'/>
                        Mail
                    </li>
                    </NavLink>
                    <NavLink to={"/feedback"} className={(link)=>link.isActive ? "Link active" :"Link"}>
                    <li className="sidebarListItem">
                        <DynamicFeedIcon className='sidebarIcon'/>
                        Feedback
                    </li>
                    </NavLink>
                    <NavLink to={"/message"} className={(link)=>link.isActive ? "Link active" :"Link"}>
                    <li className="sidebarListItem">
                        <ChatBubbleOutlineIcon className='sidebarIcon'/>
                        Message
                    </li>
                    </NavLink>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Staff</h3>
                <ul className="sidebarList">
                <NavLink to={"/manage"} className={(link)=>link.isActive ? "Link active" :"Link"}>
                    <li className="sidebarListItem">
                        <WorkOutlineIcon className='sidebarIcon'/>
                        Manage
                    </li>
                    </NavLink>
                    <NavLink to={"/analytics"} className={(link)=>link.isActive ? "Link active" :"Link"}>
                    <li className="sidebarListItem">
                        <TimeLineIcon className='sidebarIcon'/>
                        Analytics
                    </li>
                    </NavLink>
                    <NavLink to={"/reports"} className={(link)=>link.isActive ? "Link active" :"Link"}>
                    <li className="sidebarListItem">
                        <ReportIcon className='sidebarIcon'/>
                        Reports
                    </li>
                    </NavLink>
                </ul>
            </div>
        </div>

    </div>
  )
}
export default Sidebar