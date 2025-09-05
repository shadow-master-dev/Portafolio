document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ Página inicializada con cards vacíos");

  // Datos de prueba
  const mockBusqueda = { nombre: "Ejemplo de búsqueda" };

  // Renderizar los cards vacíos
  mostrarBusqueda(mockBusqueda);
  mostrarCard1();
  mostrarCard2();
});
