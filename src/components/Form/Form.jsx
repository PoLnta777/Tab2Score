import "./Form.css";

export const Form = () => {
  return (
    <div className="form-container">
      <div className="input-section">
        <p>Ingresa Tab o Partitura</p>
        <button className="file-button">Archivo</button>
      </div>

      <div className="input-section">
        <p>Escribe URL de la Tab o la Partitura</p>
        <input type="text" placeholder="URL" className="url-input" />
      </div>

      <div className="input-section row">
        <div className="instrument-box">
          <label htmlFor="instrument-input">Instrumento</label>
          <input
            id="instrument-input"
            type="text"
            placeholder="Ej: Órgano [Nombre]"
            className="instrument-input"
          />
        </div>
        <button className="create-button">Crear</button>
      </div>
    </div>
  );
};

export default Form;
