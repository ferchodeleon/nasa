import { useState } from "react";
import { Header } from "./components/Header";
import { UniqueImage } from "./components/UniqueImage";

function App() {
  const [dateToday, setDateToday] = useState(null);

  const handleToday = () => {
    let date = new Date();
    setDateToday(`${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`);
  };

  console.log("Fecha", dateToday);
  return (
    <>
      <Header dateToday={dateToday} handleToday={handleToday} />
      {dateToday ? <UniqueImage todayDate={dateToday} /> : ""}
      {/* <List todayDate={dateToday} /> */}
    </>
  );
}

export default App;
