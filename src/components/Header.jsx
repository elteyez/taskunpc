function Header({ pendientes }) {
  return (
    <header style={{ background: "#1a73e8", color: "white", padding: "16px 24px", marginBottom: "20px" }}>
      <h1 style={{ margin: 0 }}>TaskUPC</h1>
      <p style={{ margin: 0 }}>{pendientes} tareas pendientes</p>
    </header>
  );
}

export default Header;