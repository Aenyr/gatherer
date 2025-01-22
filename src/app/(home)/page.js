import React from "react";

export default function page() {
  return (
    <div className="flex w-[100vw] justify-center content-center h-[100vh] bg-[#210B3C] flex-wrap mt-[-100px]">
      <div className="w-[50vw] flex justify-end p-[100px] relative">
        <a
          href="/ores"
          className="w-[200px] h-[200px] bg-[#424242] rounded-[20px] flex justify-center items-center transition-all duration-300 ease-in-out hover:scale-110 text-white border-4 border-white-300"
        >
          Ores
        </a>
      </div>
      <div className="w-[50vw] flex p-[100px] relative">
        <a
          href="/herbs"
          className="w-[200px] h-[200px] bg-[#004D40] rounded-[20px] flex justify-center items-center transition-all duration-300 ease-in-out hover:scale-110 text-white border-4 border-white-300"
        >
          Herbs
        </a>
      </div>
    </div>
  );
}
