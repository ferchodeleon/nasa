import PropTypes from "prop-types";

import { FilterComponent } from "./FilterComponent";

import ImageMoon from "../assets/icon/icon-planet.png";
import "../styles/Header.css";

export const Header = ({ dateToday, handleToday }) => {
  return (
    <header className="nasa-headerContainer">
      <img src={ImageMoon} alt="Icon planet" className="header-image" />
      <FilterComponent dateToday={dateToday} handleToday={handleToday} />
    </header>
  );
};

Header.propTypes = {
  dateToday: PropTypes.string.isRequired,
  handleToday: PropTypes.func.isRequired,
};
