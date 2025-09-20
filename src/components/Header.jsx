import "./Header.css";

export const Header = ({ children, title, show }) => {
  return (
    <header className="header">
      <h1 className="title">{title || "titulo por defecto"}</h1>
      {children}

      {show && <p>Este Texto</p>}
    </header>
  );
};

export default Header;
