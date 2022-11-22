import React from 'react';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from "universal-cookie";


import './Styles/App.css';
const cookies = new Cookies();
import { GroupContainer, GroupListContainer, Auth } from "./Components";

const apikey = 'tr7y6szxcqbd';
const client = StreamChat.getInstance(apikey);
const authToken = cookies.get("token");

const App = () => {
  if (!authToken) return <Auth />
  return (
    <div className="app__wrapper">
      {/* <h1>Chat Application</h1> */}
      <Chat client={client} theme="team light">
        <GroupListContainer />
        <GroupContainer />
      </Chat>
    </div>
  )
}

export default App
