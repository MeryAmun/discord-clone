import React, { useState, useEffect } from "react";
import "./chat.css";
import ChatHeader from "./chatHeader/ChatHeader";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import GifIcon from "@mui/icons-material/Gif";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import { Message } from "../index";
import { useSelector } from "react-redux";
import { selectChannelId, selectChannelName } from "../../features/appSlice";
import { selectUser } from "../../features/userSlice";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  addDoc,
  Timestamp,
} from "firebase/firestore";
import { db } from "../../firebase";

const Chat = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const user = useSelector(selectUser);
  const channelName = useSelector(selectChannelName);
  const channelId = useSelector(selectChannelId);

  useEffect(() => {
    if (channelId) {
      const q = query(
        collection(db, "channels", channelId, "messages"),
        orderBy("timestamp", "desc")
      );
      onSnapshot(q, (querySnapshot) => {
        setMessages(querySnapshot.docs.map((doc) => doc.data()));
      });
    }
  }, [channelId]);

  const sendMessage = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "channels", channelId, "messages"), {
        timestamp: Timestamp.now(),
        message: input,
        user: user,
      });
      setInput("");
    } catch (err) {
      alert(err);
    }
  };
  console.log(messages);
  return (
    <div className="chat">
      <ChatHeader channelName={channelName} />
      <div className="chat__messages">
        {messages.map((message) => (
          <Message
            timestamp={message.timestamp}
            message={message.message}
            user={message.user}
          />
        ))}
      </div>
      <div className="chat__input">
        <AddCircleIcon fontSize="large" />
        <form>
          <input
            type="text"
            value={input}
            disabled={!channelId}
            placeholder={`Message #${channelName}`}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            className="chat__inputButton"
            onClick={sendMessage}
          >
            Send Message
          </button>
        </form>
        <div className="chat__inputIcons">
          <CardGiftcardIcon fontSize="large" />
          <GifIcon fontSize="large" />
          <EmojiEmotionsIcon fontSize="large" />
        </div>
      </div>
    </div>
  );
};

export default Chat;
