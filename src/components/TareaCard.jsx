import { Link } from 'react-router-dom';
import { useTareas } from '../context/TareasContext';

function TareaCard({ id, titulo, materia, fecha, completada }) {
  const { toggleTarea } = useTareas();

  return (
    <article style={{
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "12px",
      marginBottom: "10px",
      opacity: completada ? 0.6 : 1,
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <input
          type="checkbox"
          checked={completada}
          onChange={() => toggleTarea(id)}
        />
        <h3 style={{ textDecoration: completada ? "line-through" : "none", margin: 0 }}>
          {titulo}
        </h3>
      </div>
      <p style={{ margin: "6px 0" }}>{materia} · {fecha}</p>
      <span>{completada ? "✅ Completada" : "⏳ Pendiente"}</span>
      <br />
      <Link to={`/tarea/${id}`}>Ver detalle →</Link>
    </article>
  );
}

export default TareaCard;