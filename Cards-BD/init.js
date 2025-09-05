document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ Página inicializada con cards dinámicos");

  // Datos de prueba
  const mockBusqueda = { titulo: "Búsqueda de Usuarios", descripcion: "Resultados encontrados para la búsqueda." };
  const mockCard1 = { titulo: "Reporte Diario", descripcion: "Resumen de actividades realizadas hoy." };
  const mockCard2 = { titulo: "Estadísticas", descripcion: "Gráficos y métricas del sistema." };

  // Renderizar los cards dinámicos
  mostrarBusqueda(mockBusqueda);
  mostrarCard1(mockCard1);
  mostrarCard2(mockCard2);
});

