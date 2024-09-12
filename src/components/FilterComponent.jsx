import PropTypes from "prop-types";

import "../styles/FilterComponent.css";
import { useTranslation } from "react-i18next";

export const FilterComponent = ({ dateToday, handleToday }) => {
  const [t] = useTranslation("global");

  return (
    <div className="filter-container">
      <button
        type="button"
        className="filter-button today"
        onClick={() => handleToday("today")}
      >
        X
        {/* {dateToday !== null
          ? `${t("filterComponent.photoDay")}: ${dateToday}`
          : `${t("filterComponent.imageDay")}`} */}
      </button>
      <button
        className="filter-button search"
        onClick={() => handleToday("dates")}
      >
        {t("filterComponent.searchDate")}
      </button>
      <button
        className="filter-button contact"
        onClick={() => handleToday("random")}
      >
        {t("filterComponent.imageRandom")}
      </button>
    </div>
  );
};

FilterComponent.propTypes = {
  dateToday: PropTypes.string.isRequired,
  handleToday: PropTypes.string.isRequired,
};
