document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ Página inicializada");

  // Datos de prueba (mock) para que se vean los cards
  const mockCuadrilla = { nombre: "Cuadrilla Demo" };
  const mockSupervisor = { nombre: "Supervisor Demo" };
  const mockSucursales = [{ nombre: "Sucursal Demo" }];

  // Renderizar los cards vacíos
  mostrarCuadrilla(mockCuadrilla);
  mostrarSupervisor(mockSupervisor);
  mostrarSucursales(mockSucursales);
});
