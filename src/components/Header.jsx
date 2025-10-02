import "./Header.css";

export const Header = ({ title, show }) => {
  return (
    <header className="header">
      <h1 className="title">{title}</h1>

      {show && <p>IA de conversión de Music Sheet a Tab y viceversa</p>}
    </header>
  );
};

export default Header;
