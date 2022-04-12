import Login from "./components/Login";
import Board from "./components/Board";
import Recents from "./components/Recents";
import Header from "./components/Header";
import { CssBaseline } from '@mui/material'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <CssBaseline />
        <Header />
        <Routes>
          <Route path="/login" element={<Login username = {"username"}/>} />
          <Route path="/" element={<Board username = {"username"}/>} />
          <Route path="/recents" element={<Recents username = {"username"}/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
