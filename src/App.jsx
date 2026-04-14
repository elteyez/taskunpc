import { Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Inicio from './pages/Inicio';
import NuevaTarea from './pages/NuevaTarea';
import DetalleTarea from './pages/DetalleTarea';
import { useTareas } from './context/TareasContext';

function App() {
  const { tareas } = useTareas();
  const pendientes = tareas.filter(t => !t.completada).length;

  return (
    <div>
      <Header pendientes={pendientes} />
      <nav style={{ padding: "8px 24px", background: "#f1f3f4" }}>
        <Link to="/" style={{ marginRight: "16px" }}>🏠 Inicio</Link>
        <Link to="/nueva">➕ Nueva Tarea</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/nueva" element={<NuevaTarea />} />
        <Route path="/tarea/:id" element={<DetalleTarea />} />
      </Routes>
    </div>
  );
}

export default App;