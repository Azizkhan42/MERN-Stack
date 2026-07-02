import React from "react";

const Button = ({ Message, label, userData={}}) => {
  return (
    <div>
      <button
        className="border border-black rounded bg-sky-500 text-white p-2 ms-5"
        onClick={Message}
      >
        {label}
      </button>

      <h1>User Details</h1>
      <p>{userData.name}</p>
      <p>{userData?.age}</p>
      <p>{userData?.isStudent}</p>
    </div>
  );
};

export default Button;
