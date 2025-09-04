function renderSucursalesCard(sucursales) {
  const container = document.getElementById("sucursales-container");
  if (!container) return;

  container.innerHTML = `
    <div class="card mb-4">
      <div class="card-header">
        <h5 class="card-title">Sucursales</h5>
      </div>
      <div class="card-body" id="sucursales-card"></div>
    </div>
  `;

  mostrarSucursales(sucursales);
}

function mostrarSucursales(sucursales) {
  const card = document.getElementById("sucursales-card");
  if (!card) return;

  if (sucursales && sucursales.length > 0) {
    let html = `<div class="row g-3">`;

    sucursales.forEach(suc => {
      html += `
        <div class="col-12">
          <div class="d-flex align-items-center border rounded-3 p-2">
            <img src="${suc.logo}" class="rounded me-3 flex-shrink-0" 
                 width="50" height="50" onerror="this.src='assets/images/store.png'">
            <div>
              <strong>${suc.nombre}</strong><br>
              <small class="text-muted"><i class="fa-solid fa-location-dot me-1"></i> ${suc.direccion}</small><br>
              <small class="text-muted"><i class="fa-solid fa-phone me-1"></i> ${suc.telefono}</small><br>
              <small class="text-muted"><i class="fa-solid fa-user-tie me-1"></i> ${suc.representante}</small>
            </div>
          </div>
        </div>
      `;
    });

    html += `</div>`;
    card.innerHTML = html;
  } else {
    card.innerHTML = `<p class="text-muted">No tiene sucursales asignadas</p>`;
  }
}
