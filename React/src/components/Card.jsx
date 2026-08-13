const Card = ({ title, description }) => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center m-10 p-5 rounded-2xl w-[400px] bg-gray-100">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p>{description}</p>
        <div className="btns flex space-x-4 mt-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Click Me</button>
          <button className="bg-green-500 text-white px-4 py-2 rounded">Another Button</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
