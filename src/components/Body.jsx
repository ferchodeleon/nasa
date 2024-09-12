import PropTypes from "prop-types";
import { Header } from "./Header";

export const Body = ({ filterDate, filterSelect, component }) => {
  return (
    <body className="body-container">
      <Header dateToday={filterDate} handleToday={filterSelect} />
      {component}
    </body>
  );
};

Body.propTypes = {
  filterDate: PropTypes.string.isRequired,
  filterSelect: PropTypes.string.isRequired,
  component: PropTypes.node.isRequired,
};
