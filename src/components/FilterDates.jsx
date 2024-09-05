import { useEffect, useState } from "react";
import "../styles/FilterDates.css";
import { Media } from "./Media";

export const FilterDates = () => {
  const url = "https://api.nasa.gov/planetary/apod?";
  const KEY = "9KXvxSH3iyplMyjdgriSgwlUIdh7WuWPOVH05lwT";
  const [date, setDate] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dateNow = new Date();
  const actuallyDate = `${dateNow.getFullYear()}-${dateNow.getMonth() + 1}-${
    dateNow.getDay() + 1
  }`;
  const [textDate, setTextDate] = useState("Esperando fecha...");

  const handleChangeDate = (e) => {
    if (e.target.value < actuallyDate) {
      // setTextDate("Invalid date");
      setDate(e.target.value);
    }
    console.log("FECHA:", date);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${url}api_key=${KEY}&date=${date}`);
        if (!response.ok) {
          throw new Error("Error en la busqueda de la imagen");
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
  }, [date]);

  console.log("Actually", actuallyDate);

  return (
    <section className="filterDate-container">
      <div className="filterDate-calendar">
        <h2>Selecciona la fecha de la foto:</h2>
        <input
          type="date"
          className="filterDate-input"
          max={actuallyDate}
          onChange={handleChangeDate}
        />
      </div>
      <div className="filterDate-info">
        <p className="filterDate-dateSelected">
          Fecha seleccionada: <span>{date ? date : textDate}</span>
        </p>
        <div className="filterDate-container-media">
          {date ? (
            <Media data={data} />
          ) : (
            "Escoge una fecha para mostrar tu imagen"
          )}
        </div>
      </div>
    </section>
  );
};
