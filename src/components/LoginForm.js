import React, { useState } from "react";

function LoginForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  };
  return (
    <div className="content h-screen flex items-center justify-center bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="nameForm p-14 flex flex-col items-center justify-center bg-white rounded-xl"
      >
        <label className="mb-5 ml-3 w-full">
          Name:
          <input
            className="p-1 border border-gray-200 rounded-md w-full"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label className="w-full mb-5 ml-3">
          Email:
          <input
            className="p-1 border border-gray-200 rounded-md w-full"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <a href="./" className="w-full">
          <button
            type="submit"
            className="loginFormSubmit bg-blue-600 p-2 w-full text-white rounded-lg"
          >
            Submit
          </button>
        </a>
      </form>
    </div>
  );
}

export default LoginForm;
