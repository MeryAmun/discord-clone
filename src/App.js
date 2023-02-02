import React from 'react';
import './App.css';
import {Chat, Sidebar }from './components';

function App() {
  return (
    <div className="app">
  {/**sidebar */}
  <Sidebar/>
  {/**chat */}
  <Chat/>
    </div>
  );
}

export default App;
