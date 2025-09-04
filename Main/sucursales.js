// sucursales.js
function mostrarSucursales(sucursales) {
  const card = document.getElementById("sucursales-card");
  if (!card) return;

  if (sucursales && sucursales.length > 0) {
    // ... tu lógica
  } else {
    card.innerHTML = `<p class="text-muted">No tiene sucursales asignadas</p>`;
  }
}
