// === SUPERVISOR ===
function mostrarSupervisor(supervisor) {
  const card = document.getElementById("supervisor-card");
  if (!card) return;

  if (supervisor) {
    card.innerHTML = `
      <div class="d-flex flex-column align-items-center">
        ${getIconOrFoto(supervisor, 100)}
        <h6 class="fw-semibold mb-0 mt-2">${supervisor.nombre || "-"}</h6>
        <small class="text-muted">${supervisor.rol || "-"}</small>

        <div class="mt-2 w-100">
          <div
            class="d-flex align-items-center justify-content-between border rounded-3 p-2 collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#supervisor-info"
            aria-expanded="false"
            aria-controls="supervisor-info"
            style="cursor:pointer;">
            <span>Ver más datos</span>
            <i class="fa-solid fa-chevron-down text-muted chevron"></i>
          </div>
          <div id="supervisor-info" class="collapse mt-2">
            <small><i class="fa-solid fa-id-card me-1"></i> <b>DNI:</b> ${supervisor.dni || "-"}</small><br>
            <small><i class="fa-solid fa-location-dot me-1"></i> <b>Dirección:</b> ${supervisor.direccion || "-"}</small><br>
            <small><i class="fa-solid fa-phone me-1"></i> <b>Teléfono:</b> ${supervisor.telefono || "-"}</small>
          </div>
        </div>
      </div>
    `;
  } else {
    card.innerHTML = `<p class="text-muted">No tiene supervisor asignado</p>`;
  }
}


