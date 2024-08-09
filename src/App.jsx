import { useState } from "react";
import { Header } from "./components/Header";
import { UniqueMedia } from "./components/UniqueMedia";
import { FilterDates } from "./components/FilterDates";

function App() {
  const [dateToday, setDateToday] = useState(null);
  const [filterDate, setFilterDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [component, setComponent] = useState(null);

  const handleToday = () => {
    let date = new Date();
    setDateToday(
      `${date.getFullYear()}-${date.getMonth()}-${date.getDay() - 3}`
    );
  };

  const handleRamdonDate = () => {};

  const filterSelect = (isSelect) => {
    let selected = null;
    switch (isSelect) {
      case "today":
        handleToday();
        selected = <UniqueMedia todayDate={dateToday} />;
        break;
      case "dates":
        handleRamdonDate();
        selected = <FilterDates />;
        break;
      case "random":
        selected = <p>RANDOM</p>;
        break;
      default:
        selected = <p>Selecciono un elemento erroneo</p>;
        break;
    }
    setComponent(selected);
  };

  console.log("Fecha", dateToday);
  return (
    <>
      <Header dateToday={dateToday} handleToday={filterSelect} />
      {component}
      {/* {dateToday ? <UniqueMedia todayDate={dateToday} /> : ""} */}
      {/* <List todayDate={dateToday} /> */}
    </>
  );
}

export default App;
