import React, { useEffect } from "react";
import { auth } from "./firebase.js"; // Importa la instancia de Firebase
import * as firebaseui from "firebaseui";

const Sign = () => {
  useEffect(() => {
    const uiConfig = {
      signInSuccessUrl: "taskmanager-vhlai4g4w-valenruffo.vercel.app/tasks",
      signInOptions: [auth.EmailAuthProvider.PROVIDER_ID],
    };

    // Initialize the FirebaseUI Widget using Firebase.
    const ui = new firebaseui.auth.AuthUI(auth);
    // The start method will wait until the DOM is loaded.
    ui.start("#firebaseui-auth-container", uiConfig);
  }, []);

  return <div id="firebaseui-auth-container"></div>;
};

export default Sign;
