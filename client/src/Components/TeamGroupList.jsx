import React from 'react'

import { AddChannel } from "../assets/AddChannel";
const TeamGroupList = ( { children, error = false, loading, type }) => {
  if (error) {
    return type ==='team' ? (
      <div className="team-group-list">
        <p className="team-group-list__message">
          Connectio error, please wait and try again later..
        </p>
      </div>

    ): null
  }
  if(loading) {
    return (
      <div className="team-group-list">
        <p className="team-group-list__message loading">
          {type === 'team' ? 'channels' : 'messages'} loading....
        </p>
      </div>

    )
  }
  return (
    <div className="team-group-list">
      <div className="team-group-list__header">
        <p className="team-group-list__header__title">
          {type === 'team' ? 'channels' : 'Direct messages'}
        </p>
        {/* button */}
      </div>
    </div>
  )
}

export default TeamGroupList
