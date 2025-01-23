"use client";
import { useState } from "react";

export default function Herbs() {
  const [selectedOption, setSelectedOption] = useState();
const [selectedHerb, setSelectedHerb] = useState()

  const handleClick = (option) => {
    setSelectedOption(option);
  };

  const handleHerbSelect = (herb) => {
    setSelectedHerb(herb); 
  };

  const options = [
    {
      name: "Old Azeroth",
      color: "bg-[#195E64]",
      plants: ["Peacebloom", "Silverleaf", "Briarthron"]
    },
    {
      name: "Outland",
      color: "bg-[#6FA243]",
      plants: ["Netherbloom", "Felweed", "Terrocone"]
    },
    {
      name: "Northrend",
      color: "bg-[#35AEE9]",
      plants: ["Icethron", "Goldclover", "Tiger Lilly"]
    },
    {
      name: "Pandaria",
      color: "bg-[#88AC8A]",
      plants: ["Rain Poppy", "Bristlethron", "Emperors Crown"]
    },
    {
      name: "Shadowlands",
      color: "bg-[#6B6B6B]",
      plants: ["Marrowroot", "Widowbloom", "Rising Glory"]
    },
  ];

  return (
    <div className="flex flex-col items-center flex-wrap w-[100vw]">
      <h1 className="text-white text-[40px] mb-[50px]">
        Where did you find this herb?
      </h1>
      <div className="flex flex-wrap justify-around w-[100%] ">
        {options.map((place, index) => (
          <div className="" key={index}>
            <div
              onClick={() => {
                handleClick(place);
              }}
              className={`w-[200px] h-[200px] rounded-[20px] flex justify-center items-center transition-all duration-300 ease-in-out hover:scale-110 text-white border-4 border-white-300 ${place.color} ${place.name === selectedOption?.name && "scale-110"} `}
            >
              {place.name}
            </div>
          </div>
        ))}
      </div>
      <h1 className="text-white text-[40px] mb-[50px]">What did you find?</h1>
      {selectedOption && (
      <div className="flex flex-col gap-4">
            {selectedOption.plants.map((herb, index) => (
              <div key={index} className="flex items-center gap-3">
                <input
                  type="radio"
                  id={`herb-${index}`}
                  name="herb"
                  value={herb}
                  className="cursor-pointer"
                  onChange={() => handleHerbSelect(herb)}
                  checked={selectedHerb === herb}
                />
                <label
                  htmlFor={`herb-${index}`}
                  className="text-white text-[18px] cursor-pointer"
                >
                  {herb}
                </label>
              </div>
            ))}
          </div>)}
    </div>
  );
}
