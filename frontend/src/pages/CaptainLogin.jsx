import React, { useState } from "react";
import { Link } from "react-router-dom";

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captainData, setCaptainData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setCaptainData({
      email: email,
      password: password,
    });
    console.log(captainData);
    setEmail("");
    setPassword("");
  };
  return (
    <div className="h-screen p-7 flex flex-col justify-between">
      <div>
        <img
          className="w-[20vw] object-center rounded-[2vw] ml-4 mb-3"
          src="https://media.istockphoto.com/id/1153445663/vector/steering-wheel-icon-car-and-drive-or-driver-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=H58CVFRXlUSp6fT9pjpg-NG4hN-OhJY1xp9rSSrLNBs="
          alt=""
        />
        <form onSubmit={(e) => submitHandler(e)}>
          <h3 className="text-lg font-medium mb-2">What's your email?</h3>

          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="email"
            placeholder="email@example.com"
          />

          <h3 className="text-lg font-medium mb-2">Enter Password</h3>

          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="password"
            placeholder="password"
          />

          <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base">
            Login
          </button>

          <p className="text-center">
            Join us as a rider?{" "}
            <Link to={"/captain-signup"} className="text-blue-600">
              Register as a Captain
            </Link>
          </p>
        </form>
      </div>
      <div>
        <Link
          to={"/login"}
          className="flex items-center justify-center bg-[#d5622d] text-white font-semibold mb-5 rounded 
          px-4 py-2 w-full text-lg placeholder:text-base"
        >
          Sign in as User
        </Link>
      </div>
    </div>
  )
};

export default CaptainLogin;
