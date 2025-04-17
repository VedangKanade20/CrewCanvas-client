import React, { useState } from 'react';

type ColorOption = {
  name: string;
  value: string;
  class: string;
};

const colors: ColorOption[] = [
  { name: 'Green 🟢', value: 'green', class: 'bg-green-500' },
  { name: 'Blue 🔵', value: 'blue', class: 'bg-blue-500' },
  { name: 'cyan  ', value: 'cyan', class: 'bg-cyan-500' },
  { name: 'Red 🔴', value: 'red', class: 'bg-red-500' },
  { name: 'Yellow 🟡', value: 'yellow', class: 'bg-yellow-400' },
  { name: 'Purple 🟣', value: 'purple', class: 'bg-purple-500' },
];

const ColorDropdown: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<string>(colors[0].value);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedColor(e.target.value);
  };
  return (
    <div className="flex flex-col gap-4 items-start w-full mt-1">
      <select
        value={selectedColor}
        onChange={handleChange}
        className="px-3 py-2 rounded-lg outline-none bg-[#27272A] text-gray-300 border border-gray-700 focus:ring-2 focus:ring-blue-500 w-2/3  " 
      >
        {colors.map((color) => (
          <option key={color.value} value={color.value}>
            {color.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ColorDropdown;
