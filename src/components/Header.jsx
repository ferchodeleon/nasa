import "../styles/Header.css";

export const Header = () => {
  return (
    <header className="nasa-headerContainer">
      <button className="nasa-button .about">ABOUT US</button>
      <button className="nasa-button .search">SEARCH</button>
      <button className="nasa-button .contact">CONTACT</button>
    </header>
  );
};
