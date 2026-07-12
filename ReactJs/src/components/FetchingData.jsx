import React, { useEffect, useState } from "react";

const FetchingData = () => {
  const [count, setCount] = useState(0);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );
      const data = await response.json();
      setPosts(data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>UseEffect Hook</h1>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <ul>
        {posts.map((user) => (
          <li key={user.id}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>{user.website}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchingData;
