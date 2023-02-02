import React from "react";
import "./sidebar.css";
import { ExpandMore } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import CallIcon from "@mui/icons-material/Call";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { SidebarChannels } from "../index";
import Avatar from '@mui/material/Avatar';
import MicIcon from '@mui/icons-material/Mic';
import HeadsetIcon from '@mui/icons-material/Headset';
import SettingsIcon from '@mui/icons-material/Settings';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h3>Clever Programmer</h3>
        <ExpandMore />
      </div>
      <div className="sidebar__channels">
        <div className="sidebar__channelsHeader">
          <div className="sidebar__header">
            <ExpandMore />
            <h4>Text Channels</h4>
          </div>

          <AddIcon className="sidebar__addChannel" />
        </div>
        <div className="sidebar__channelsList">
          <SidebarChannels />
          <SidebarChannels />
          <SidebarChannels />
          <SidebarChannels />
        </div>
      </div>
      <div className="sidebar__voice">
        <SignalCellularAltIcon
          className="sidebar__voiceIcon"
          fontSize="large"
        />
        <div className="sidebar__voiceInfo">
          <h3>Voice Connected</h3>
          <p>Stream</p>
        </div>
        <div className="sidebar__voiceIcons">
          <InfoOutlinedIcon />
          <CallIcon />
        </div>
      </div>
      <div className="sidebar__profile">
        <Avatar src="https://media.licdn.com/dms/image/C4E03AQFR7jcZoAzLRA/profile-displayphoto-shrink_100_100/0/1591992426375?e=1680739200&v=beta&t=oBf3XhxUFn9rOIz1SqEsMnVa_p3vlk5leLQ0q2LjLN4"/>
        <div className="sidebar__profileInfo">
          <h3>@Username</h3>
          <p>#ThisIsMyId</p>
        </div>
        <div className="sidebar__profileIcons">
        <MicIcon/>
        <HeadsetIcon/>
        <SettingsIcon/>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
