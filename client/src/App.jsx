import React from 'react';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from "universal-cookie";

import { GroupContainer, GroupListContainer } from "./Components";

const apikey = 'tr7y6szxcqbd';
const client = StreamChat.getInstance(apikey);
const App = () => {
  return (
    <div className='app_wrapper'>
      <h1>Chat Application</h1>
      <Chat client={client} theme="theme dark">
        <GroupListContainer 
        
        />
        <GroupContainer 
        
        />
      </Chat>
    </div>
  )
}

export default App
