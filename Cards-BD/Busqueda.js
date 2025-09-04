function mostrarBusqueda(data) {
  const container = document.getElementById("busqueda-container");
  if (!container) return;

  const titulo = data?.nombre || "Sin nombre";

  container.innerHTML = `
    <div class="card mb-4">
      <div class="card-header d-flex align-items-center justify-content-between">
        <h5 class="card-title mb-0">Búsqueda</h5>
      </div>
      <div class="card-body">
        <h6 class="fw-semibold">${titulo}</h6>
        <p class="text-muted">Aquí se mostrarán los resultados de la búsqueda...</p>
      </div>
    </div>
  `;
}
