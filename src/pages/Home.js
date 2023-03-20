import React from "react";
import LoginForm from "../components/LoginForm";
import "../index.css";
function Home() {
  return (
    <div className="App">
      <div className="content h-screen flex items-center justify-center bg-gray-50">
      <LoginForm />
      </div>
    </div>
  );
}

export default Home;
