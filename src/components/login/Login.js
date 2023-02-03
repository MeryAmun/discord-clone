import React, { useState } from "react";
import "./login.css";
import Button from "@mui/material/Button";
import { auth, provider } from "../../firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [errorCode, setErrorCode] = useState();

  const signIn = () => {
    //do clever google login

    provider.setCustomParameters({ prompt: "select_account" });
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        console.log(credential);
        //const token = credential.accessToken;
        // The signed-in user info.
        //const user = result.user;
        // redux action? --> dispatch({ type: SET_USER, user });
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorCode(errorCode);
        setErrorMessage(errorMessage);
        // The email of the user's account used.
        //const email = error.email;
        // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  return (
    <div className="login">
      <div className="login__error">
        <h4 className="login__errorCode">{errorCode}</h4>
        <p className="login__errorMessage">{errorMessage}</p>
      </div>
      <div className="login__logo">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHBPB12wRyfzRb-AOw642G_OvHnEkqoRYV3w&usqp=CAU"
          alt="logo"
        />
      </div>
      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
};

export default Login;
