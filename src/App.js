import "./index.css";
import LoginForm from "./components/LoginForm";
import Navbar from "./components/Navbar";
import ProgressSidebar from "./components/ProgressSidebar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ProgressSidebar />
      <LoginForm />
    </div>
  );
}

export default App;
