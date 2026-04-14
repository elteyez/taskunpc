import { createContext, useContext, useState, useEffect } from 'react';
import { tareasIniciales } from '../data/tareas';

const TareasContext = createContext();

export function TareasProvider({ children }) {
  const [tareas, setTareas] = useState(() => {
    const guardadas = localStorage.getItem('taskunpc-tareas');
    return guardadas ? JSON.parse(guardadas) : tareasIniciales;
  });

  useEffect(() => {
    localStorage.setItem('taskunpc-tareas', JSON.stringify(tareas));
  }, [tareas]);

  function toggleTarea(id) {
    setTareas(prev => prev.map(t =>
      t.id === id ? { ...t, completada: !t.completada } : t
    ));
  }

  function agregarTarea(nuevaTarea) {
    setTareas(prev => [...prev, { ...nuevaTarea, id: Date.now() }]);
  }

  function eliminarTarea(id) {
    setTareas(prev => prev.filter(t => t.id !== id));
  }

  return (
    <TareasContext.Provider value={{ tareas, toggleTarea, agregarTarea, eliminarTarea }}>
      {children}
    </TareasContext.Provider>
  );
}

export function useTareas() {
  return useContext(TareasContext);
}