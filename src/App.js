import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Notes from "./components/Notes";
import notesStore from "./stores/notesStore";
import UpdateForm from "./components/UpdateForm";
import CreateForm from "./components/CreateForm";
import NotesPage from "./components/NotesPage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Pages/Login";
import RequiredAuth from "./components/RequiredAuth";
import Signup from "./components/Signup";
import Logout from "./Pages/Logout";
import authStore from "./stores/authStore";
import Auth from "./Pages/Auth";
import Home from "./Pages/Home";
import Loader from "./components/Loader";
function App() {
  const store = notesStore();
  const AuthStore = authStore();

  useEffect(() => {
    store.fetchNotes();
  }, [AuthStore.loggedIn]);

  useEffect(() => {
    if(AuthStore.loggedIn ===null)
     AuthStore.checkAuth(); 
  }, );

  if (AuthStore.loggedIn === null) {
    return <Loader />;
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={AuthStore.loggedIn ?<Home /> : <Navigate to={'/auth'}/>} />
        <Route path="/auth" element={!AuthStore.loggedIn ? <Auth /> : <Navigate to={'/'}/>} />
      </Routes>
    </div>
  );
}

export default App;
