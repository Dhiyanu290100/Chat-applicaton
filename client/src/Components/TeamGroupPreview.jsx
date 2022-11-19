import React from 'react'
import { Avatar, useChatContext } from "stream-chat-react";
const TeamGroupPreview = ({group, type}) => {
    const { group: activeGroup, client } = useChatContext();
    const GroupPreview = () => (
        <p className="Group-preview__item">
            #{group?.data?.name || group?.data?.id}
        </p>
    );

    const DirectPreview = ()=>{
        const members = Object.values(group.state.members).filter(({user}) => user.id ===! client.userID);

        return(
          <div className="group-preview__item single">
                <Avatar image={members[0] ?.user?.image} name={members[0]?.user?.fullname} size={24} />
                <p>{members[0]?.user?.fullname}</p>
            </div>
        )
    }
  return (
    <div className= { group?.id === activeGroup?.id ? 'group-preview__wrapper__selected' : 'group-preview__wrapper'} 
    onClick={()=>{console.log(group);}}>
    {type === 'team'? <GroupPreview/> : <DirectPreview/>}
      
    </div>
  )
}

export default TeamGroupPreview
