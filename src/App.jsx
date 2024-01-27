import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import Game from "./pages/game";

const App = () => {
  return (
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path='game' element={<Game />} />
          <Route path="*" element={<>nothing</>} />
      </Routes>
  );
}

export default App;
