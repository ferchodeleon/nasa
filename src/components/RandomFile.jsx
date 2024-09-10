import { useEffect, useState } from "react";
import "../styles/RandomFile.css";
import { Media } from "./Media";

export const RandomFile = () => {
  const url = "https://api.nasa.gov/planetary/apod?";
  const KEY = "9KXvxSH3iyplMyjdgriSgwlUIdh7WuWPOVH05lwT";
  const [date, setDate] = useState(null);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(true);

  const randomDate = (startDate, endDate) => {
    return new Date(
      startDate.getTime() +
        Math.random() * (endDate.getTime() - startDate.getTime())
    );
  };

  const handleRandomFile = () => {
    const date = new Date();
    const lastDate = new Date(2024, 1, 1);
    const newDate = randomDate(lastDate, date);
    const formatDate = `${newDate.getFullYear()}-${newDate.getMonth()}-${newDate.getDate()}`;

    console.log("random", formatDate);
    setDate(formatDate);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (!date) return;

      setLoading(true);

      try {
        const response = await fetch(`${url}api_key=${KEY}&date=${date}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setFile(result);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    fetchData();
  }, [date]);

  return (
    <section className="random-container">
      <div className="random-button-container">
        <button className="random-button" onClick={handleRandomFile}>
          Toca y saldra una imagen aleatoria
        </button>
      </div>
      <div className="random-file">
        {loading ? (
          "Esperando"
        ) : !file ? (
          "Esperando toque el botón"
        ) : (
          <Media data={file} />
        )}
      </div>
    </section>
  );
};
