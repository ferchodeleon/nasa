import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import "../styles/List.css";

export const List = ({ todayDate }) => {
  const KEY = "9KXvxSH3iyplMyjdgriSgwlUIdh7WuWPOVH05lwT";
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.nasa.gov/planetary/apod?api_key=${KEY}${
            todayDate !== null ? `&date=${todayDate}` : ""
          }`
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
  }, [todayDate]);

  if (loading) return <p className="nasa-otherText">Cargando ...</p>;

  if (error)
    return <p className="nasa-otherText">Hubo un error: {error.message}</p>;

  return (
    <main className="nasa-main-container">
      <div className="nasa-container-text">
        <h1 className="nasa-title">{data.title}</h1>
        <p className="nasa-text">{data.explanation}</p>
      </div>
      <div className="nasa-filter">
        <input type="date" />
      </div>
      <div className="nasa-container-image">
        {data.map((info) => (
          <div
            key={info.url}
            className="nasa-image"
            style={{ backgroundImage: `url(${info.url})` }}
          />
        ))}
      </div>
    </main>
  );
};

List.propTypes = {
  todayDate: PropTypes.string.isRequired,
};
