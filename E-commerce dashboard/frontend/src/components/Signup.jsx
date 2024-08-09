import React, { useState } from "react";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const collectData = async () => {
    console.log(name, email, password);
    let result = await fetch("http://localhost:5173/register", {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col p-2 w-96 text-center items-center">
        <h1 className="font-serif">New user? Sign-up</h1>
        <div className="flex flex-col p-2 w-96 text-center">
          <input
            className="p-2 m-2 border-2 rounded-lg"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
          <input
            className="p-2 m-2 border-2 rounded-lg"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          <input
            className="p-2 m-2 border-2 rounded-lg"
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
          <button onClick={collectData} className="p-2 m-2 border-2 rounded-lg bg-green-500">
            Sign-up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
