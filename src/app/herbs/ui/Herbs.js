"use client";
import { useState } from "react";

export default function Herbs() {
  const [selectedOption, setSelectedOption] = useState();
  const handleClick = (option) => {
    setSelectedOption(option);
  };

  const options = [
    {
      name: "Eastern Kingdoms",
      color: "bg-[#E6A02D]",
    },
    {
      name: "Kalimdor",
      color: "bg-[#195E64]",
    },
    {
      name: "Outland",
      color: "bg-[#6FA243]",
    },
    {
      name: "Northrend",
      color: "bg-[#35AEE9]",
    },
    {
      name: "Pandaria",
      color: "bg-[#88AC8A]",
    },
    {
      name: "Shadowlands",
      color: "bg-[#6B6B6B]",
    },
  ];

  return (
    <div className="flex flex-col items-center flex-wrap w-[100vw]">
      <h1 className="text-white text-[40px] mb-[50px]">
        Where did you find this herb?
      </h1>
      <div className="flex flex-wrap justify-around w-[100%] ">
        {options.map((place, index) => (
          <div className="relative" key={index}>
            <div
              onClick={() => {
                handleClick();
                console.log(place.color);
              }}
              className={`w-[200px] h-[200px] rounded-[20px] flex justify-center items-center transition-all duration-300 ease-in-out hover:scale-110 text-white border-4 border-white-300 ${place.color}`}
            >
              {place.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
