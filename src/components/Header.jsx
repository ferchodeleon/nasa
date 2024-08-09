import PropTypes from "prop-types";

import "../styles/Header.css";

export const Header = ({ dateToday, handleToday }) => {
  return (
    <header className="nasa-headerContainer">
      <button
        type="button"
        className="nasa-button .today"
        onClick={() => handleToday("today")}
      >
        {dateToday !== null ? `Foto del día: ${dateToday}` : "Imagen del día"}
      </button>
      <button
        className="nasa-button .search"
        onClick={() => handleToday("dates")}
      >
        Buscar por fecha
      </button>
      <button
        className="nasa-button .contact"
        onClick={() => handleToday("random")}
      >
        Random
      </button>
    </header>
  );
};

Header.propTypes = {
  dateToday: PropTypes.string.isRequired,
  handleToday: PropTypes.func.isRequired,
};
