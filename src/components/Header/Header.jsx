import "./Header.css";

export const Header = ({ title, show }) => {
  return (
    <header className="header">
      <h1 className="title">{title || "Título por defecto"}</h1>

      {show && (
        <p className="subtitle">
          IA de conversión de Music Sheet a Tab y viceversa DEMO
        </p>
      )}
    </header>
  );
};

export default Header;
