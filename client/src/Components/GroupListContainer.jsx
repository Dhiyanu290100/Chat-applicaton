import React from 'react';
import { ChannelList, useChatContext } from "stream-chat-react";
import Cookies from "universal-cookie";

import icon1  from "../assets/icon1.png";
import LogoutIcon from "../assets/logout.png";
import '../Styles/App.css';


import { ChannelSearch, TeamChannelList, TeamChannelPreview } from "./";


const SideBar = () => (
  <div classname='group-list__sidebar'>                                                                                                                                        
      <div classname="group-list__sidebar__icon1">
        <div classname="icon1__inner">
          <img src={icon1} alt = "icon1" width="30"/>
        </div>
      </div>
      <div classname="group-list__sidebar__icon2">   
        <div classname="icon2__inner">
          <img src={LogoutIcon} alt = "Logout" width="30"/>
        </div>
      </div>
  </div>
  
)
const GroupListContainer = () => {
  return (
    <>
      <SideBar />
    </>
  )
}

export default GroupListContainer;
