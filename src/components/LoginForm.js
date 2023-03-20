import React, { useState } from "react";


function LoginForm() {
  const [name, setName] = useState("");
  const [group, setGroup] = useState("");

  const handleSubmit = (event) => {
    localStorage.setItem("naam", name);
    localStorage.setItem("groep", group);
  };
  return (
    <div className="">
      <form action="/uitleg"
        onSubmit={handleSubmit}
        className="nameForm p-14 flex flex-col items-center justify-center bg-white rounded-xl"
      >
        <label className="mb-5 ml-3 w-full">
          Naam:
          <input
            className="p-1 border border-gray-200 rounded-md w-full"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label className="w-full mb-5 ml-3">
          Klas:
          <input
            className="p-1 border border-gray-200 rounded-md w-full"
            type="text"
            value={group}
            onChange={(e) => setGroup(e.target.value)}
            required
          />
        </label>
          <button
            type="submit"
            className="loginFormSubmit bg-blue-600 p-2 w-full text-white shadow-sm shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Volgende
          </button>
      </form>
    </div>
  );
}

export default LoginForm;
