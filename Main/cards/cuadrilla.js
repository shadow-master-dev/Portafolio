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

  // === manejar chevron al expandir/colapsar ===
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

      html += `<div class="row g-2">`;
      const nombreActivo = (usuarioActivo?.nombre || "").trim().toLowerCase();

      integrantes.forEach((emp, idx) => {
        const esUsuarioActivo = (emp.nombre || "").trim().toLowerCase() === nombreActivo;
        const esLider = (emp.rol_en_cuadrilla || "").toLowerCase() === "líder";
        const collapseId = `emp-collapse-${idx}`;

        html += `
          <div class="col-12 col-sm-6 col-lg-4">
            <div class="border rounded-3 p-2 h-100">
              <div class="d-flex align-items-center justify-content-between collapsed"
                   data-bs-toggle="collapse"
                   data-bs-target="#${collapseId}"
                   aria-expanded="false"
                   aria-controls="${collapseId}"
                   style="cursor:pointer;">
                <div class="d-flex align-items-center">
                  ${getIconOrFoto(emp, 44)}
                  <div class="d-flex flex-column justify-content-center">
                    <div class="d-flex align-items-center flex-wrap">
                      <strong class="me-2">${emp.nombre || "-"}</strong>
                      ${esUsuarioActivo ? `<span class="badge bg-primary-subtle text-primary border border-primary-subtle me-1">Tú</span>` : ""}
                      ${esLider ? `<span class="badge bg-warning text-dark">Líder</span>` : ""}
                    </div>
                    <small class="text-muted">${emp.rol_en_cuadrilla || emp.rol || "-"}</small>
                  </div>
                </div>
                <i class="fa-solid fa-chevron-down text-muted chevron"></i>
              </div>

              <div id="${collapseId}" class="collapse mt-2">
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
} actualizar estilo <div class="accordion-item shadow-sm mb-3 rounded-4 overflow-hidden">
                        <h2 class="accordion-header">
                          <button class="accordion-button" type="button" data-bs-toggle="collapse"
                            data-bs-target="#modern-collapseOne" aria-expanded="true"
                            aria-controls="modern-collapseOne">
                            <div class="d-flex align-items-center w-100">
                              <div class="icon-box lg bg-primary-subtle rounded-circle me-3">
                                <i class="bi bi-cloud text-primary fs-4"></i>
                              </div>
                              <div>
                                <h6>Cloud Services</h6>
                                <p class="mb-0 small">Scalable solutions for your business</p>
                              </div>
                              <span
                                class="ms-auto badge bg-primary-subtle text-primary rounded-pill px-3 me-2">Featured</span>
                            </div>
                          </button>
                        </h2>
                        <div id="modern-collapseOne" class="accordion-collapse collapse show"
                          data-bs-parent="#modernAccordion">
                          <div class="accordion-body bg-primary-subtle">
                            <div class="p-3 rounded-3 border border-primary">
                              <p class="mb-0">Our cloud services offer unmatched scalability, reliability, and security.
                                Deploy applications with ease, scale resources on demand, and only pay for what you use.
                                With 99.9% uptime guarantee and 24/7 support, your business can operate with confidence.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div> 
