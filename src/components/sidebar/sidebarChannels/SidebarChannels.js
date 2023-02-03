import React from "react";
import "./sidebarChannels.css";
import { useDispatch } from "react-redux";
import { setChannelInfo } from "../../../features/appSlice";

const SidebarChannels = ({ id, channelName }) => {
  const dispatch = useDispatch();

  return (
    <div
      className="sidebarChannel"
      onClick={() =>
        dispatch(
          setChannelInfo({
            channelId: id,
            channelName: channelName,
          })
        )
      }
    >
      <h4 key={id}>
        <span className="sidebarChannel__hash">#</span>
        {channelName}
      </h4>
    </div>
  );
};

export default SidebarChannels;
