import { useState } from "react";
import { Header } from "./components/Header";
import { UniqueMedia } from "./components/UniqueMedia";
import { FilterDates } from "./components/FilterDates";

function App() {
  const [filterDate, setFilterDate] = useState(null);
  const [component, setComponent] = useState(null);

  const handleChangeDate = () => {
    const date = new Date();
    setFilterDate(
      `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDay() + 1}`
    );
    console.log("Fecha en handle", filterDate);
  };

  const handleRamdonDate = () => {};

  const filterSelect = (isSelect) => {
    let componentt = null;
    switch (isSelect) {
      case "today":
        handleChangeDate();
        console.log("filterDate", filterDate);
        componentt = <UniqueMedia todayDate={filterDate} />;
        break;
      case "dates":
        setFilterDate(null);
        handleRamdonDate();
        componentt = <FilterDates />;
        break;
      case "random":
        componentt = <p>RANDOM</p>;
        break;
      default:
        componentt = <p>Selecciono un elemento erroneo</p>;
        break;
    }
    setComponent(componentt);
  };

  console.log("Fecha:", filterDate);
  return (
    <>
      <Header dateToday={filterDate} handleToday={filterSelect} />
      {component}
    </>
  );
}

export default App;
