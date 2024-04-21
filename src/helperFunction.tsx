import React, { useState, ChangeEvent } from 'react';

// Small helper function to uppercase the first letter of a string
export function firstLetter(word: string): string {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

const sizes: string[] = ["Small", "Medium", "Large"];


export const SizeSelector: React.FC = () => {
  const [size, setSize] = useState<string>('');

  const handleSizeChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    const newSize = event.target.value;
    setSize(newSize); // Update the state
  };

  return (
    <select
      value={size || ""}
      onChange={handleSizeChange}
      className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
    >
      <option value="" disabled hidden>Choose size</option>
      {sizes.map((size, index) => (
        <option key={index} value={size}>{firstLetter(size)}</option>
      ))}
    </select>
  );
}

