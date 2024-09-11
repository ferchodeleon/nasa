import { useEffect, useState } from "react";
import "../styles/FilterDates.css";
import { Media } from "./Media";
import { useTranslation } from "react-i18next";

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
  const [t] = useTranslation("global");

  const handleChangeDate = (e) => {
    if (e.target.value <= actuallyDate) {
      // setTextDate("Invalid date");
      setTimeout(() => {
        setDate(e.target.value);
      }, "1 second");
    }
    console.log("FECHA:", date);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (!date) return;

      setLoading(true);
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
        <h2>{t("selectDatePhoto")}</h2>
        <input
          type="date"
          className="filterDate-input"
          max={actuallyDate}
          onChange={handleChangeDate}
        />
      </div>
      <div className="filterDate-info">
        <p className="filterDate-dateSelected">
          {date ? `Fecha seleccionada: ${date}` : ""}
        </p>
        <div className="filterDate-container-media">
          {loading ? (
            "Esperando por imagen..."
          ) : error ? (
            <p>{error}</p>
          ) : date ? (
            <Media data={data} />
          ) : (
            "Escoge una fecha para mostrar tu imagen"
          )}
        </div>
      </div>
    </section>
  );
};
