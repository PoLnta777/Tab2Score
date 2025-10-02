import React, { useState } from "react";
import "./Form.css";

export const Form = () => {
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState("");
  const [instrument, setInstrument] = useState("");

  const handleCreate = () => {
    // Validación: URL e Instrumento deben ir juntos o estar vacíos
    const urlFilled = url.trim() !== "";
    const instrumentFilled = instrument.trim() !== "";

    if (urlFilled !== instrumentFilled) {
      alert(
        "Debes completar ambos campos: URL e Instrumento, o dejarlos vacíos."
      );
      return;
    }

    // Al menos uno de los datos (archivo o URL+Instrumento) debe existir
    if (!file && !urlFilled) {
      alert("Debes subir un archivo o completar URL e Instrumento.");
      return;
    }

    // Mostrar datos en consola
    console.log("Archivo:", file);
    console.log("URL:", url);
    console.log("Instrumento:", instrument);
    alert("Datos enviados correctamente. Revisa la consola.");
  };

  return (
    <div className="form-container">
      {/* Subida de archivo */}
      <div className="input-section">
        <p>Ingresa Tab o Partitura</p>
        <label className="file-button">
          Archivo
          <input
            type="file"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
        </label>
        {file && <p>Archivo seleccionado: {file.name}</p>}
      </div>

      {/* URL + Instrumento */}
      <div className="input-section">
        <p>Escribe URL de la Tab o la Partitura</p>
        <input
          type="text"
          placeholder="URL"
          className="url-input"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </div>

      <div className="input-section row">
        <div className="instrument-box">
          <label>Instrumento</label>
          <input
            type="text"
            placeholder="Ej: Órgano [Nombre]"
            className="instrument-input"
            value={instrument}
            onChange={(e) => setInstrument(e.target.value)}
          />
        </div>
        <button className="create-button" onClick={handleCreate}>
          Crear
        </button>
      </div>
    </div>
  );
};

export default Form;
