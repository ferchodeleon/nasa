import PropTypes from "prop-types";

import "../styles/FilterComponent.css";

export const FilterComponent = ({ dateToday, handleToday }) => {
  return (
    <div className="filter-container">
      <button
        type="button"
        className="filter-button today"
        onClick={() => handleToday("today")}
      >
        {dateToday !== null ? `Foto del día: ${dateToday}` : "Imagen del día"}
      </button>
      <button
        className="filter-button search"
        onClick={() => handleToday("dates")}
      >
        Buscar por fecha
      </button>
      <button
        className="filter-button contact"
        onClick={() => handleToday("random")}
      >
        Random
      </button>
    </div>
  );
};

FilterComponent.propTypes = {
  dateToday: PropTypes.string.isRequired,
  handleToday: PropTypes.string.isRequired,
};
