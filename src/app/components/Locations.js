"use client";
import { useState } from "react";
import Cursor from ".//Cursor";
import List from "./List";

export default function Locations({ type }) {
  const [selectedOption, setSelectedOption] = useState();

  const handleClick = (option) => {
    setSelectedOption(option);
  };

  const options = [
    {
      name: "Old Azeroth",
      color: "bg-[#195E64]",
      herbs: ["Peacebloom", "Silverleaf", "Briarthron"],
      ores: ["Copper ore", "Silver ore", "Gold ore"],
    },
    {
      name: "Outland",
      color: "bg-[#6FA243]",
      herbs: ["Netherbloom", "Felweed", "Terrocone"],
      ores: ["Fel Iron ore", "Khorium ore"],
    },
    {
      name: "Northrend",
      color: "bg-[#35AEE9]",
      herbs: ["Icethron", "Goldclover", "Tiger Lilly"],
      ores: ["Titanium ore", "Cobalt ore", "Saronite ore"],
    },
    {
      name: "Pandaria",
      color: "bg-[#88AC8A]",
      herbs: ["Rain Poppy", "Bristlethron", "Emperors Crown"],
      ores: ["Ghost Iron ore"],
    },
    {
      name: "Shadowlands",
      color: "bg-[#6B6B6B]",
      herbs: ["Marrowroot", "Widowbloom", "Rising Glory"],
      ores: ["Bismuth ore", "Monolith ore"],
    },
  ];

  return (
    <>
      <Cursor />
      <div className="flex w-[100vw] flex-col flex-wrap items-center">
        <h1 className="mb-[50px] text-[40px] text-white">
          {`Where did you find this ${type}?`}
        </h1>
        <div className="flex w-[100%] flex-wrap justify-around">
          {options.map((place, index) => (
            <div className="" key={index}>
              <div
                onClick={() => {
                  handleClick(place);
                }}
                className={`border-white-300 flex h-[200px] w-[200px] items-center justify-center rounded-[20px] border-4 text-white transition-all duration-300 ease-in-out hover:scale-110 ${
                  place.color
                } ${place.name === selectedOption?.name && "scale-110"} `}
              >
                {place.name}
              </div>
            </div>
          ))}
        </div>
        <h1 className="mb-[50px] text-[40px] text-white">What did you find?</h1>
        <List selectedOption={selectedOption} type={type} />
      </div>
    </>
  );
}
