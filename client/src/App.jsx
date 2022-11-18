import React from 'react';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from "universal-cookie";


import './Styles/App.css';
import { GroupContainer, GroupListContainer } from "./Components";

const apikey = 'tr7y6szxcqbd';
const client = StreamChat.getInstance(apikey);

const App = () => {
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
