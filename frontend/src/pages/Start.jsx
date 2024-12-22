import React from "react";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div>
      <div className="h-screen w-full pt-8 flex justify-between flex-col bg-cover bg-center 
      bg-[url(https://plus.unsplash.com/premium_photo-1680430094293-728b61a2bd8c?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]">
        <img
          className="w-[20vw] rounded-[2vw] ml-4"
          src="/logo/zippy.png"
          alt=""
        />
        <div className="py-4 px-4 pb-7 bg-white">
          <h2 className="text-2xl font-bold">Get Started with Zippy</h2>
          <Link to={"/login"} className="flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5">
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Start;
