import React, { useState } from "react";

const Form = () => {
  const [item, setItem] = useState(["phy"]);
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleClick = () => {
    setItem([...item, inputValue]);
  };
  return (
    <div className="border p-3 w-[350px] m-auto mt-5">
      <h1 className="font-bold text-center text-2xl mb-3">Add Tasks</h1>
      <input
        type="text"
        placeholder="Enter text..."
        className="border outline-none p-1 "
        onChange={handleChange}
        value={inputValue}
      />
      <button
        className="border cursor-pointer mx-3 p-1 outline-none"
        onClick={handleClick}
      >
        Add
      </button>

      <ul>
        {item.map((items) => {
          return (
            <li key={items} className="border p-2 mt-2">
              {items}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Form;
