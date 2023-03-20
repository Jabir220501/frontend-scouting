import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProgressSidebar from "./components/ProgressSidebar";
import Home from "./pages/Home";
import Score from "./pages/Score";
import Taak1 from "./pages/taak-1";
import Taak2 from "./pages/taak-2";
import Taak3 from "./pages/taak-3";
import Uitleg from "./pages/Uitleg";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ProgressSidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="uitleg" element={<Uitleg />} />
        <Route path="taak-1" element={<Taak1 />} />
        <Route path="taak-2" element={<Taak2 />} />
        <Route path="taak-3" element={<Taak3 />} />
        <Route path="score" element={<Score />} />
      </Routes>
    </div>
  );
}

export default App;
