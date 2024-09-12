import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import "../styles/UniqueMedia.css";

export const UniqueMedia = ({ todayDate }) => {
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
    <main className="nasa-media-container">
      <div className="nasa-media-text-container">
        <h1 className="nasa-media-title">{data.title}</h1>
        <p className="nasa-media-text">{data.explanation}</p>
      </div>
      <div className="nasa-media-container-image">
        {data.media_type === "video" ? (
          <iframe
            className="nasa-media-video"
            width="100%"
            height="600px"
            src={data.url}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowfullscreen
          >
            <div className="nasa-nameImage">
              <p className="nasa-nameImage-title">{data.title}</p>
            </div>
            <div className="nasa-type-mediaContainer">
              <p className="nasa-type-media">
                <span>Tipo de medio:</span>
                {` ${data.media_type}`}
              </p>
            </div>
          </iframe>
        ) : (
          <div
            className="nasa-media-image"
            style={{ backgroundImage: `url(${data.url})` }}
          >
            <div className="nasa-nameImage">
              <p className="nasa-nameImage-title">{data.title}</p>
            </div>
            <div className="nasa-type-mediaContainer">
              <p className="nasa-type-media">
                <span>Tipo de medio:</span>
                {` ${data.media_type}`}
              </p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

UniqueMedia.propTypes = {
  todayDate: PropTypes.string.isRequired,
};
