import React from 'react';
import { ChannelList, useChatContext } from "stream-chat-react";
import Cookies from "universal-cookie";

import icon1  from "../assets/icon1.png";
import LogoutIcon from "../assets/logout.png";
import '../Styles/App.css';


import { GroupSearch, TeamGroupList, TeamGroupPreview } from "./";


const SideBar = ({ logout }) => (
  <div className='group-list__sidebar'>
      <div className="group-list__sidebar__icon1">
        <div className="icon1__inner">
          <img src={icon1} alt = "icon1" width="30"/>
        </div>
      </div>
      <div className="group-list__sidebar__icon2">   
      <div className="icon2__inner" onClick={logout}>
          <img src={LogoutIcon} alt = "Logout" width="30"/>
        </div>
      </div>
  </div>
  
)

const ChatHeader = () => (
  <div className="group-list__header">
    <p className="group-list__header__text">CHATS</p>
  </div>
)
const GroupListContainer = () => {
  return (
    <>
      <SideBar />
      <div className="group-list__list__wrapper">
        <ChatHeader />
        <GroupSearch />
        <TeamGroupList type="team"/>
        <TeamGroupPreview type="team"/>
        <TeamGroupList type="Messaging"/>
        <TeamGroupPreview type="Messaging"/>
        
      </div>
    </>
  )
}

export default GroupListContainer;
