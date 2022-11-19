import React, { useState, useEffect} from 'react';
import { getGroupStyles, useChatContext } from 'stream-chat-react';

import { SearchIcon } from "../assets/SearchIcon";

const GroupSearch = () => {
    const [query ,setQuery] = useState('');
    const [loading ,setLoading] = useState('');
    const getGroup = async (text) => {
        try {
            //TODO: Fetch channels
        } catch (error) {
            setQuery('')
        }
    }
    const onSearch =(event) => {
        event.preventDefault();
        setLoading(true);
        setQuery(event.target.value)
        getGroup(event.target.value)

    }
  return (
    <div className="group-search__container">
        <div className="group-search__input__wrapper">
            <div className="group-search__input__icon">
                <SearchIcon />
            </div>
            <input className="group-search__input__text" placeholder="Search" type="text" value= {query} onChange= {onSearch} />
        </div>      
    </div>
  )
}

export default GroupSearch
