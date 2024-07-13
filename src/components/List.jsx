import { useState, useEffect } from "react";

import "../styles/List.css";

export const List = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const KEY = "9KXvxSH3iyplMyjdgriSgwlUIdh7WuWPOVH05lwT";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.nasa.gov/planetary/apod?api_key=${KEY}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Cargando ...</p>;

  if (error) return <p>Hubo un error: {error.message}</p>;

  console.log(data);

  return (
    <main className="nasa-main-container">
      <div className="nasa-container-text">
        <h1 className="nasa-title">{data.title}</h1>
        <p className="nasa-text">{data.explanation}</p>
      </div>
      <div className="nasa-container-image">
        <div
          className="nasa-image"
          style={{ backgroundImage: `url(${data.url})` }}
        />
        <div
          className="nasa-image"
          style={{ backgroundImage: `url(${data.url})` }}
        />
        <div
          className="nasa-image"
          style={{ backgroundImage: `url(${data.url})` }}
        />
      </div>
    </main>
  );
};
