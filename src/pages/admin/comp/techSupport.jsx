import { useEffect, useState } from "react";

const TechSupport = () => {




    
  return (
    <div className="flex flex-col items-center justify-start w-full h-full mt-20 pb-10">
      <h1 className="text-4xl font-bold text-black mb-4">
        Admin Tech Support Tool
      </h1>
      <div className="w-3/4 h-full bg-gray-400 flex flex-row">
        <div className="w-full h-fit bg-white flex flex-col items-center justify-start">
          <h1 className=" w-full py-8 text-2xl font-bold text-black text-center border-b-2 border-black">
            Contact Tech Support
          </h1>
          <div className="w-full h-full flex-row flex justify-center items-center mt-2">
            <div className="flex flex-col justify-center items-center w-full h-full border-b-2 border-black bg-white">
              <h1 className="text-xl font-bold text-black mb-4">
                Submit New Ticket
              </h1>
            </div>
            <div className="flex flex-col justify-center items-center w-full h-full border-b-2 border-black bg-white">
              <h1 className="text-xl font-bold text-black mb-4 ">
                View Open Tickets
              </h1>
            </div>
            <div className="flex flex-col justify-center items-center w-full h-full border-b-2 border-black bg-white">
              <h1 className="text-xl font-bold text-black mb-4">
                View Closed Tickets
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechSupport;
