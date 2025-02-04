import { useState } from "react";

export default function List({ selectedOption, type }) {
  const [selectedItem, setSelectedItem] = useState();

  const handleItemSelect = (item) => {
    setSelectedItem(item);
  };

  return (
    <div>
      {selectedOption && (
        <div className="flex flex-col gap-4">
          {selectedOption[type + "s"].map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <input
                type="radio"
                id={`item-${index}`}
                name="item"
                value={item}
                className="cursor-pointer"
                onChange={() => handleItemSelect(item)}
                checked={selectedItem === item}
              />
              <label
                htmlFor={`item-${index}`}
                className="cursor-pointer text-[18px] text-white"
              >
                {item}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
