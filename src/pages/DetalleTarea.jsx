import { useParams, useNavigate } from 'react-router-dom';
import { useTareas } from '../context/TareasContext';

function DetalleTarea() {
  const { id } = useParams();
  const { tareas, eliminarTarea, toggleTarea } = useTareas();
  const navigate = useNavigate();

  const tarea = tareas.find(t => t.id === Number(id));

  if (!tarea) return <div style={{ padding: "24px" }}>Tarea no encontrada.</div>;

  function handleEliminar() {
    eliminarTarea(tarea.id);
    navigate('/');
  }

  return (
    <div style={{ padding: "24px", maxWidth: "480px" }}>
      <button onClick={() => navigate('/')} style={{ marginBottom: "16px", cursor: "pointer" }}>
        ← Volver
      </button>
      <h2>{tarea.titulo}</h2>
      <p><strong>Materia:</strong> {tarea.materia}</p>
      <p><strong>Fecha:</strong> {tarea.fecha}</p>
      <p><strong>Estado:</strong> {tarea.completada ? "✅ Completada" : "⏳ Pendiente"}</p>
      <div style={{ display: "flex", gap: "12px", marginTop: "20px" }}>
        <button
          onClick={() => { toggleTarea(tarea.id); navigate('/'); }}
          style={{ padding: "10px 20px", background: "#1a73e8", color: "white", border: "none", borderRadius: "6px", cursor: "pointer" }}
        >
          {tarea.completada ? "Marcar pendiente" : "Marcar completada"}
        </button>
        <button
          onClick={handleEliminar}
          style={{ padding: "10px 20px", background: "#e53935", color: "white", border: "none", borderRadius: "6px", cursor: "pointer" }}
        >
          🗑 Eliminar
        </button>
      </div>
    </div>
  );
}

export default DetalleTarea;