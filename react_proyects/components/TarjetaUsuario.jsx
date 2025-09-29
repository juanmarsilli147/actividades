import "./MisComponentes.css";

function TarjetaUsuario({ nombre, correo, edad, enLinea }) {
  return (
    <div className="user-card">
      <div className="user-header">
        <h2>
          {nombre}{" "}
          <span className={enLinea ? "online" : "offline"}>●</span>
        </h2>
      </div>
      <p>Correo: {correo}</p>
      <p>Edad: {edad}</p>
    </div>
  );
}

export default TarjetaUsuario;