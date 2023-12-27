import React from "react";
import { UserAuth } from "../../context/AuthContext";
const LogoutPage = () => {
  const { logout } = UserAuth();

  const handleLogout = async () => {
    try {
      await logout();
      console.log("User logged out successfully");
    } catch (error) {
      console.log(error);
    }
    console.log("clicked");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full grow basis-80 bg-white">
          <div
          className="mt-40 flex flex-col items-center justify-center  h-full w-full  bg-white"
          >
               <h1 className="text-4xl text-black top-50 left-50">
          Thanks for Coming!
        </h1>
        <button
          className="text-4xl text-black bg-white shadow-xl rounded-lg p-4 m-4 hover:bg-gray-100 hover:text-gray-900"
          onClick={handleLogout}
        >
          Logout
        </button>
        </div>
       
    </div>
  );
};

export default LogoutPage;
