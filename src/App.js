import React,{ useEffect } from 'react';
import './App.css';
import {Chat, Login, Sidebar }from './components';
import { useSelector , useDispatch} from 'react-redux';
import { login, selectUser, logout } from './features/userSlice';
import { auth } from './firebase';

function App() {
  const  user  = useSelector(selectUser);
  const dispatch = useDispatch()

  useEffect(() => {
   auth.onAuthStateChanged((authUser) => {
    if(authUser){
      //user is logged in
      dispatch(
        login({
          uid:authUser.uid,
          photo:authUser.photoURL,
          email:authUser.email,
          displayName:authUser.displayName
        })
      )
    }else{
      //user is logged out
    }
   })
  }, [])
  
  return (
    <div className="app">
 {
  user ? (
    <>
     <Sidebar/>
  <Chat/>
    </>
  ) : (
    <Login/>
  )
 }
    </div>
  );
}

export default App;
