function TareaCard({ titulo, materia, fecha, completada }) {
  return (
    <article style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "12px", marginBottom: "10px" }}>
      <h3>{titulo}</h3>
      <p>{materia} · {fecha}</p>
      <span>{completada ? "✅ Completada" : "⏳ Pendiente"}</span>
    </article>
  );
}

export default TareaCard;