<script>
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

  // Manejar chevron al expandir/colapsar
  container.addEventListener("shown.bs.collapse", e => {
    const chevron = e.target.closest(".accordion-item").querySelector(".chevron");
    if (chevron) {
      chevron.classList.remove("fa-chevron-down");
      chevron.classList.add("fa-chevron-up");
    }
  });

  container.addEventListener("hidden.bs.collapse", e => {
    const chevron = e.target.closest(".accordion-item").querySelector(".chevron");
    if (chevron) {
      chevron.classList.remove("fa-chevron-up");
      chevron.classList.add("fa-chevron-down");
    }
  });
}

function mostrarCuadrilla(cuadrilla, usuarioActivo) {
  const card = document.getElementById("cuadrilla-card");
  const badge = document.getElementById("cuadrilla-estado-badge");
  if (!card) return;

  if (cuadrilla) {
    const estado = (cuadrilla.estado || "").toLowerCase();
    let badgeClass = "bg-light text-dark";
    if (estado === "activo") badgeClass = "bg-success";
    if (estado === "inactivo") badgeClass = "bg-secondary";

    if (badge) {
      badge.className = `badge rounded-pill ${badgeClass}`;
      badge.textContent = cuadrilla.estado || "-";
    }

    let html = `
      <h6 class="fw-semibold mb-1">${cuadrilla.nombre_cuadrilla || "-"}</h6>
      <p class="mb-1"><small>Rol en cuadrilla: ${cuadrilla.rol_en_cuadrilla || "-"}</small></p>
      <p class="mb-3"><small>Inicio: ${formatFecha(cuadrilla.fecha_inicio)}</small></p>
      <h6 class="fw-semibold">Integrantes</h6>
    `;

    if (cuadrilla.integrantes && cuadrilla.integrantes.length > 0) {
      const integrantes = [...cuadrilla.integrantes];
      integrantes.sort((a, b) => {
        if ((a.rol_en_cuadrilla || "").toLowerCase() === "líder") return -1;
        if ((b.rol_en_cuadrilla || "").toLowerCase() === "líder") return 1;
        return 0;
      });

      html += `<div class="accordion modern-accordion" id="accordionCuadrilla">`;
      const nombreActivo = (usuarioActivo?.nombre || "").trim().toLowerCase();

      integrantes.forEach((emp, idx) => {
        const esUsuarioActivo = (emp.nombre || "").trim().toLowerCase() === nombreActivo;
        const esLider = (emp.rol_en_cuadrilla || "").toLowerCase() === "líder";
        const collapseId = `emp-collapse-${idx}`;

        html += `
          <div class="accordion-item shadow-sm mb-3 rounded-4 overflow-hidden">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed d-flex align-items-center" type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#${collapseId}"
                      aria-expanded="false"
                      aria-controls="${collapseId}">
                <div class="icon-box lg bg-primary-subtle rounded-circle me-3">
                  ${getIconOrFoto(emp, 44)}
                </div>
                <div class="flex-grow-1">
                  <h6 class="mb-0">${emp.nombre || "-"}</h6>
                  <small class="text-muted">${emp.rol_en_cuadrilla || emp.rol || "-"}</small>
                </div>
                ${esUsuarioActivo ? `<span class="badge bg-primary-subtle text-primary rounded-pill px-3 me-2">Tú</span>` : ""}
                ${esLider ? `<span class="badge bg-warning text-dark rounded-pill px-3 me-2">Líder</span>` : ""}
                <i class="fa-solid fa-chevron-down text-muted ms-2 chevron"></i>
              </button>
            </h2>
            <div id="${collapseId}" class="accordion-collapse collapse">
              <div class="accordion-body bg-light-subtle">
                <small><i class="fa-solid fa-id-card me-1"></i> <b>DNI:</b> ${emp.dni || "-"}</small><br>
                <small><i class="fa-solid fa-location-dot me-1"></i> <b>Dirección:</b> ${emp.direccion || "-"}</small><br>
                <small><i class="fa-solid fa-phone me-1"></i> <b>Teléfono:</b> ${emp.telefono || "-"}</small><br>
                <hr class="my-1">
                <small><i class="fa-solid fa-shirt me-1"></i> <b>Polo:</b> ${emp.talla_polo || "-"}</small><br>
                <small><i class="fa-solid fa-person me-1"></i> <b>Chaleco:</b> ${emp.talla_chaleco || "-"}</small><br>
                <small><i class="fa-solid fa-user-tie me-1"></i> <b>Casaca:</b> ${emp.talla_casaca || "-"}</small><br>
                <small><i class="fa-solid fa-ruler-combined me-1"></i> <b>Pantalón:</b> ${emp.talla_pantalon || "-"}</small><br>
                <small><i class="fa-solid fa-shoe-prints me-1"></i> <b>Bota:</b> ${emp.talla_bota || "-"}</small>
              </div>
            </div>
          </div>
        `;
      });

      html += `</div>`;
    } else {
      html += `<p class="text-muted">No hay integrantes en la cuadrilla</p>`;
    }

    card.innerHTML = html;
  } else {
    if (badge) {
      badge.className = "badge rounded-pill bg-light text-dark";
      badge.textContent = "-";
    }
    card.innerHTML = `<p class="text-muted">No pertenece a ninguna cuadrilla</p>`;
  }
}


</script>
