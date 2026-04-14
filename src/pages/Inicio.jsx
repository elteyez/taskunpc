import { useState } from 'react';
import { useTareas } from '../context/TareasContext';
import TareaCard from '../components/TareaCard';

function Inicio() {
  const { tareas } = useTareas();
  const [filtro, setFiltro] = useState('todas');

  const tareasFiltradas = tareas.filter(t => {
    if (filtro === 'pendientes') return !t.completada;
    if (filtro === 'completadas') return t.completada;
    return true;
  });

  const btnStyle = (valor) => ({
    marginRight: "8px",
    padding: "6px 14px",
    borderRadius: "20px",
    border: "none",
    cursor: "pointer",
    background: filtro === valor ? "#1a73e8" : "#e0e0e0",
    color: filtro === valor ? "white" : "black",
  });

  return (
    <div style={{ padding: "24px" }}>
      <div style={{ marginBottom: "16px" }}>
        <button style={btnStyle('todas')} onClick={() => setFiltro('todas')}>Todas</button>
        <button style={btnStyle('pendientes')} onClick={() => setFiltro('pendientes')}>Pendientes</button>
        <button style={btnStyle('completadas')} onClick={() => setFiltro('completadas')}>Completadas</button>
      </div>
      {tareasFiltradas.map(tarea => (
        <TareaCard key={tarea.id} {...tarea} />
      ))}
    </div>
  );
}

export default Inicio;