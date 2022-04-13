import Login from "./components/Login";
import Workspace from "./components/Workspace";
import Recents from "./components/Recents";
import Header from "./components/Header";
import { CssBaseline } from '@mui/material'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React, { useState } from "react";

const App = () => {

  const [workspaces, setWorkspaces] = useState(JSON.parse(localStorage.getItem('workspaces')))

  if(!workspaces) {
    setWorkspaces({})
  }

  return (
    <>
      <Router>
        <CssBaseline />
        <Header workspaces={workspaces} setWorkspaces={setWorkspaces} />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Workspace />} />
          <Route path="/recents" element={<Recents />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
