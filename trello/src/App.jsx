import Login from "./components/Login";
import Workspace from "./components/Workspace";
import Recents from "./components/Recents";
import Header from "./components/Header";
import { CssBaseline } from '@mui/material'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React, { useState } from "react";

const App = () => {

  const [workspaces, setWorkspaces] = useState(JSON.parse(localStorage.getItem('workspaces')))
  let isCurrWorkspace = JSON.parse(localStorage.getItem('currentWorkspace'))
  const [currentWorkspace, setCurrentWorkspace] = useState(isCurrWorkspace ? isCurrWorkspace : {})
  
  //console.log(isCurrWorkspace)
  // if(isCurrWorkspace){
  //   setCurrentWorkspace(isCurrWorkspace)
  // }

  if(!workspaces) {
    setWorkspaces({})
  }

  return (
    <>
      <Router>
        <CssBaseline />
        <Header workspaces={workspaces} setWorkspaces={setWorkspaces} setCurrentWorkspace={setCurrentWorkspace}/>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Workspace currentWorkspace={currentWorkspace} setWorkspaces={setWorkspaces} setCurrentWorkspace={setCurrentWorkspace}/>} />
          <Route path="/recents" element={<Recents workspaces={workspaces}/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
