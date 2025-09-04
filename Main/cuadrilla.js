// cuadrilla.js
function mostrarCuadrilla(cuadrilla, usuarioActivo) {
  const card = document.getElementById("cuadrilla-card");
  const badge = document.getElementById("cuadrilla-estado-badge");
  if (!card) return;

  if (cuadrilla) {
    // ... tu lógica actual
  } else {
    if (badge) {
      badge.className = "badge rounded-pill bg-light text-dark";
      badge.textContent = "-";
    }
    card.innerHTML = `<p class="text-muted">No pertenece a ninguna cuadrilla</p>`;
  }
}
