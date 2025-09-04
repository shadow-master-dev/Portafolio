function mostrarResultadosBD(data) {
  const container = document.getElementById("cuadrilla-container");
  if (!container) return;

  container.innerHTML = `
    <div class="card mb-4">
      <div class="card-header">
        <h5 class="card-title mb-0">Mi Cuadrilla</h5>
      </div>
      <div class="card-body">
        <p class="text-muted">Aquí irá el contenido de la cuadrilla...</p>
      </div>
    </div>
  `;
}
