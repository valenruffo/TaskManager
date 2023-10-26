import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./pages/LandingPage/LandingPage";
import CreateTask from "./pages/Create/CreateTask";
import firebase from "firebase/app";
import "firebase/auth";
import * as firebaseui from "firebaseui";

//import LoginButton from "./components/LoginButton";
//import LogoutButton from "./components/LogoutButton";

function App() {
  // Initialize the FirebaseUI Widget using Firebase.
  const ui = new firebaseui.auth.AuthUI(firebase.auth());
  ui.start("#firebaseui-auth-container", {
    signInOptions: [
      {
        provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
        signInMethod: firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD,
      },
    ],
    // Other config options...
  });

  // Is there an email link sign-in?
  if (ui.isPendingRedirect()) {
    ui.start("#firebaseui-auth-container", uiConfig);
  }
  // This can also be done via:
  if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
    ui.start("#firebaseui-auth-container", uiConfig);
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar path="/" element={<Navbar />} />

        <Routes>
          <Route path="/tasks" element={<LandingPage />} />
          <Route path="/create" element={<CreateTask />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
