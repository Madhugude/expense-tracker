import React, { useEffect, useState } from "react";

const Fetch = () => {

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(res => res.json())
      .then(result => setData(result));
  }, []);

  return (
    <div>
      <h1>Fetch Data</h1>

      {data && (
        <div>
          <p>User ID: {data.userId}</p>
          <p>Title: {data.title}</p>
        </div>
      )}

    </div>
  );
};

export default Fetch;