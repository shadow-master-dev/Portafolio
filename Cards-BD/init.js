document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ Página inicializada con cards dinámicos");

  // 🔹 Datos de prueba
  const mockBusqueda = { titulo: "Búsqueda de Usuarios", descripcion: "Resultados encontrados para la búsqueda." };
  

  // 🔹 Renderizar los nuevos cards
  mostrarBusqueda(mockBusqueda);

});
