import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTareas } from '../context/TareasContext';

function NuevaTarea() {
  const { agregarTarea } = useTareas();
  const navigate = useNavigate();
  const [form, setForm] = useState({ titulo: '', materia: '', fecha: '' });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.titulo || !form.materia || !form.fecha) return;
    agregarTarea({ ...form, completada: false });
    navigate('/');
  }

  const inputStyle = {
    display: "block",
    width: "100%",
    padding: "8px",
    marginBottom: "12px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "16px",
  };

  return (
    <div style={{ padding: "24px", maxWidth: "480px" }}>
      <h2>Nueva Tarea</h2>
      <form onSubmit={handleSubmit}>
        <label>Título</label>
        <input style={inputStyle} name="titulo" value={form.titulo} onChange={handleChange} placeholder="Ej: Parcial de Cálculo" />
        <label>Materia</label>
        <input style={inputStyle} name="materia" value={form.materia} onChange={handleChange} placeholder="Ej: Matemáticas" />
        <label>Fecha</label>
        <input style={inputStyle} type="date" name="fecha" value={form.fecha} onChange={handleChange} />
        <button type="submit" style={{ background: "#1a73e8", color: "white", padding: "10px 24px", border: "none", borderRadius: "6px", cursor: "pointer", fontSize: "16px" }}>
          Agregar Tarea
        </button>
      </form>
    </div>
  );
}

export default NuevaTarea;