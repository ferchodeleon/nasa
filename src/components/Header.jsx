import PropTypes from "prop-types";

import { FilterComponent } from "./FilterComponent";

import IconSpanish from "../assets/img/spanish.webp";
import IconEnglish from "../assets/img/english.png";
import "../styles/Header.css";
import { useTranslation } from "react-i18next";

export const Header = ({ dateToday, handleToday }) => {
  const [t, i18n] = useTranslation("global");

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const isSelected = () => {
    const language = i18n.language;
    console.log("language", language);
    return language;
  };

  console.log(isSelected());

  return (
    <header className="nasa-headerContainer">
      <div className="nasa-top-header">
        <div className="nasa-translate">
          <button
            className={isSelected() === "es" ? "selected" : ""}
            onClick={() => handleChangeLanguage("es")}
          >
            <img src={IconSpanish} alt="icon spanish" />
            <p>{t("header.spanish")}</p>
          </button>
          <button
            className={isSelected() === "en" ? "selected" : ""}
            onClick={() => handleChangeLanguage("en")}
          >
            <img src={IconEnglish} alt="icon english" />
            <p>{t("header.english")}</p>
          </button>
        </div>
      </div>
      <FilterComponent dateToday={dateToday} handleToday={handleToday} />
    </header>
  );
};

Header.propTypes = {
  dateToday: PropTypes.string.isRequired,
  handleToday: PropTypes.func.isRequired,
};
