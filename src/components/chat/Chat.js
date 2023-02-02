import React from 'react';
import './chat.css'
import ChatHeader from './chatHeader/ChatHeader';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GifIcon from '@mui/icons-material/Gif';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { Message } from '../index'

const Chat = () => {
  return (
    <div className='chat'>
        <ChatHeader/>
        <div className="chat__messages">
            <Message/>
            <Message/>
            <Message/>
        </div>
        <div className="chat__input">
   <AddCircleIcon fontSize='large'/>
   <form>
    <input type="text" placeholder='Message #TestChannel' />
    <button type='submit' className='chat__inputButton'>Send Message</button>
   </form>
   <div className="chat__inputIcons">
<CardGiftcardIcon fontSize='large'/>
<GifIcon fontSize='large'/>
<EmojiEmotionsIcon fontSize='large'/>
   </div>
        </div>
    </div>
  )
}

export default Chat