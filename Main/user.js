// user.js
function setUserHeader(data) {
  if (!data || data.length === 0) return;
  const u = data[0];

  const fotoUrl = u.imagen && u.imagen.trim() !== "" 
    ? u.imagen 
    : "assets/images/user-optional.png";

  document.getElementById("user-foto-menu").src = fotoUrl;
  document.getElementById("user-foto-dropdown").src = fotoUrl;

  document.getElementById("user-nombre").textContent = u.nombre || u.username || "Sin nombre";
  document.getElementById("user-rol").textContent = u.rol || "Usuario";

  mostrarSupervisor(u.supervisor);
  mostrarCuadrilla(u.cuadrilla, u);
  mostrarSucursales(u.sucursales);
}
