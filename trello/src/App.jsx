import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Login from "./components/Login";
import React, { useEffect, useState } from "react";

const App = () => {
  const [username, setUsername] = useState('')
  // const navigate = useNavigate();
  // if(username == '') {
  //   navigate("/login")
  // }
  // useEffect(() => {
  //   if(username == '') {
  //     navigate("/login")
  //   }
  //   // else {
  //   //   navigate("/login")
  //   // }
  // })

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login username={username} setUsername={setUsername} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
