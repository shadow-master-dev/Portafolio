function renderCuadrillaCard(cuadrilla, usuarioActivo) {
  const container = document.getElementById("cuadrilla-container");
  if (!container) return;

  container.innerHTML = `
    <div class="card mb-4">
      <div class="card-header d-flex align-items-center justify-content-between">
        <h5 class="card-title mb-0">Mi Cuadrilla</h5>
        <span id="cuadrilla-estado-badge" class="badge rounded-pill"></span>
      </div>
      <div class="card-body" id="cuadrilla-card"></div>
    </div>
  `;

  mostrarCuadrilla(cuadrilla, usuarioActivo);

  // 🟢 manejar iconos al expandir/colapsar
  container.addEventListener("shown.bs.collapse", e => {
    const chevron = e.target.closest(".border").querySelector(".chevron");
    if (chevron) {
      chevron.classList.remove("fa-chevron-down");
      chevron.classList.add("fa-chevron-up");
    }
  });

  container.addEventListener("hidden.bs.collapse", e => {
    const chevron = e.target.closest(".border").querySelector(".chevron");
    if (chevron) {
      chevron.classList.remove("fa-chevron-up");
      chevron.classList.add("fa-chevron-down");
    }
  });
}
