import PropTypes from "prop-types";
import { Header } from "./Header";
import { FilterComponent } from "./FilterComponent";

import "../styles/Body.css";

export const Body = ({ filterDate, filterSelect, component }) => {
  return (
    <main className="body-container">
      <Header />
      <section className="main-container">
        <FilterComponent dateToday={filterDate} handleToday={filterSelect} />
        {component}
      </section>
    </main>
  );
};

Body.propTypes = {
  filterDate: PropTypes.string.isRequired,
  filterSelect: PropTypes.string.isRequired,
  component: PropTypes.node.isRequired,
};
