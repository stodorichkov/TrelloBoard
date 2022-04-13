import Login from "./components/Login";
import Workspace from "./components/Workspace";
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
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Workspace />} />
          <Route path="/recents" element={<Recents />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
