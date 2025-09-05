function mostrarBusqueda(data) {
  const container = document.getElementById("busqueda-container");
  if (!container) return;

  const titulo = data?.titulo || "Sin resultados";
  const descripcion = data?.descripcion || "Aquí se mostrarán los resultados de la búsqueda...";

  container.innerHTML = `
    <div class="card mb-4">
      <div class="card-header">
        <h5 class="card-title mb-0">${titulo}</h5>
      </div>
      <div class="card-body">
        <p class="text-muted">${descripcion}</p>
      </div>
    </div>
  `;
}
