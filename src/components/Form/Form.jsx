import React, { useState } from "react";
import "./Form.css";

export const Form = () => {
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState("");
  const [instrument, setInstrument] = useState("");

  const handleCreate = () => {
    const urlFilled = url.trim() !== "";
    const instrumentFilled = instrument.trim() !== "";

    // 🔒 1. Si sube archivo, no debe haber URL ni instrumento
    if (file && (urlFilled || instrumentFilled)) {
      alert(
        "No puedes subir archivo y completar URL/instrumento al mismo tiempo."
      );
      return;
    }

    // 🔒 2. Si usa URL/instrumento, deben estar ambos completos
    if (!file && urlFilled !== instrumentFilled) {
      alert(
        "Debes completar ambos campos: URL e Instrumento, o dejar ambos vacíos."
      );
      return;
    }

    // 🔒 3. Si no hay nada cargado
    if (!file && !urlFilled && !instrumentFilled) {
      alert("Debes subir un archivo o completar URL e Instrumento.");
      return;
    }

    // ✅ 4. Si todo está bien
    if (file) {
      console.log("Modo archivo");
      console.log("Archivo:", file);
    } else {
      console.log("Modo URL + instrumento");
      console.log("URL:", url);
      console.log("Instrumento:", instrument);
    }

    alert("Datos enviados correctamente. Revisa la consola.");

    // 🧹 Limpieza de campos
    setFile(null);
    setUrl("");
    setInstrument("");
  };

  return (
    <div className="form-container">
      {/* MÉTODO 1 - Subir archivo */}
      <div className="method-section">
        <h2>🎵 Ingresar Tab o Partitura (archivo)</h2>
        <div className="input-box">
          <label className="file-button" htmlFor="fileInput">
            Subir archivo
          </label>
          <input
            id="fileInput"
            type="file"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          {file && <p>Archivo seleccionado: {file.name}</p>}
        </div>
      </div>

      {/* SEPARADOR */}
      <div className="separator">
        <span>o</span>
      </div>

      {/* MÉTODO 2 - URL + instrumento */}
      <div className="method-section">
        <h2>🌐 Ingresar por URL e instrumento</h2>

        <div className="input-box">
          <input
            type="text"
            placeholder="URL de la tab o partitura"
            className="url-input"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>

        <div className="input-box">
          <input
            type="text"
            placeholder="Instrumento (Ej: Guitarra Eléctrica)"
            className="instrument-input"
            value={instrument}
            onChange={(e) => setInstrument(e.target.value)}
          />
        </div>

        <button type="button" className="create-button" onClick={handleCreate}>
          Crear
        </button>
      </div>
    </div>
  );
};

export default Form;
