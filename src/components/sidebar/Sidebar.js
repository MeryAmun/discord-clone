import React from 'react'
import './sidebar.css'
import { ExpandMore } from '@mui/icons-material'
import AddIcon from '@mui/icons-material/Add';
import { SidebarChannels } from '../index'

const Sidebar = () => {
  return (
    <div className='sidebar'> 
    <div className='sidebar__top'>
        <h3>Clever Programmer</h3>
        <ExpandMore/>
    </div>
    <div className="sidebar__channels">
      <div className="sidebar__channelsHeader">
        <div className="sidebar__header">
          <ExpandMore/>
          <h4>Text Channels</h4>
        </div>

        <AddIcon className='sidebar__addChannel'/>
      </div>
      <div className="sidebar__channelsList">
  <SidebarChannels/>
  <SidebarChannels/>
  <SidebarChannels/>
  <SidebarChannels/>
    </div>
    </div>
    </div>
  )
}


export default Sidebar