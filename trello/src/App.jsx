import Login from "./components/Login";
import { useNavigate} from "react-router-dom";
import React, { useEffect, useState } from "react";

const App = () => {
  const [username, setUsername] = useState(localStorage.getItem('username'))
  const navigate = useNavigate();

  console.log(username)

  useEffect(() => {
    if(!username) {
      navigate("/login")
    }
  })

  return (
    <>
      <h1>Hello {username}</h1>
    </>
  );
}

export default App;
