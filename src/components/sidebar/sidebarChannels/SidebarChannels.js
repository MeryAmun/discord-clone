import React from 'react';
import './sidebarChannels.css';



const SidebarChannels = ({ id, channelName}) =>  { 

  return (
    <div className='sidebarChannel'>
      <h4 key={id}>
        <span className="sidebarChannel__hash">#</span>{channelName}
      </h4>
    </div>
  )
}

export default SidebarChannels