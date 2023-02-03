import React, { useState, useEffect } from "react";
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
import { useSelector } from 'react-redux';
import { selectUser } from "../../features/userSlice";
import { auth, db } from "../../firebase";
import { collection, query, orderBy, onSnapshot, getDocs,addDoc } from "firebase/firestore";


const Sidebar = () => {
  const [channels, setChannels] = useState([])
  const {displayName, uid ,photo} = useSelector(selectUser);

 const getChannels = async () => {
    const channelsSnapshot = await getDocs(collection(db, "channels"));
    const channelsList = channelsSnapshot.docs.map((doc) => doc.data());
    setChannels(channelsList);
  }

  useEffect(() => {
  // getChannels()
   const q = query(collection(db, 'channels'))
   onSnapshot(q, (querySnapshot) => {
     setChannels(querySnapshot.docs.map(doc => ({
       id: doc.id,
       channel: doc.data()
     })))
   })
  }, [])



  const handleAddChannel = async () => {
    const channelName = prompt("Enter a new channel name");
    try {
      if(channelName){
        await addDoc(collection(db, 'channels'), {
          channelName
        })
       }
     
    } catch (err) {
      alert(err)
    }
  }
  
  
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

          <AddIcon className="sidebar__addChannel" onClick={handleAddChannel}/>
        </div>
        <div className="sidebar__channelsList">
          {
            channels.map(({channel, id}) => (
              <SidebarChannels key={id} id={id} channelName={channel.channelName}/>
            ))
          }
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
        <Avatar src={photo}/>
        <div className="sidebar__profileInfo">
          <h3>{displayName}</h3>
          <p>#{uid}</p>
          <h4 className="logout" onClick={() => auth.signOut()}>Sign Out</h4>
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
