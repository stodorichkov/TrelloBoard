import Login from "./components/Login";
import { useNavigate} from "react-router-dom";
import React, { useEffect, useState } from "react";

const App = () => {
  const [username, setUsername] = useState('')
  const navigate = useNavigate();

  useEffect(() => {
    if(username == '') {
      navigate("/login")
    }
  })

  return (
    <>
      <h1>Home</h1>
    </>
  );
}

export default App;
