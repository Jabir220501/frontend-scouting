import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProgressSidebar from "./components/ProgressSidebar";
import Home from "./pages/Home";
import Taak1 from "./pages/taak-1";
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
      </Routes>
    </div>
  );
}

export default App;
