// === Iconos por rol ===
const iconosRol = {
  "técnico": "fa-solid fa-screwdriver-wrench text-primary",
  "vendedor": "fa-solid fa-handshake text-success",
  "almacén": "fa-solid fa-boxes-stacked text-warning",
  "administrador": "fa-solid fa-user-tie text-danger",
  "líder": "fa-solid fa-star text-info",
  "cliente": "fa-solid fa-user text-secondary"
};

// === Utilidades ===
function formatFecha(fechaStr) {
  if (!fechaStr) return "-";
  const f = new Date(fechaStr);
  if (isNaN(f)) return fechaStr;
  const d = String(f.getDate()).padStart(2, "0");
  const m = String(f.getMonth() + 1).padStart(2, "0");
  const y = f.getFullYear();
  return `${d}/${m}/${y}`;
}

function getIconOrFoto(emp, size = 64) {
  if (!emp) return getRoleIcon({}, size);
  if (emp.foto && emp.foto.trim() !== "") {
    return `<img src="${emp.foto}" class="rounded-circle me-2 flex-shrink-0" 
                width="${size}" height="${size}" 
                onerror="this.src='assets/images/user-optional.png'">`;
  }
  return getRoleIcon(emp, size);
}

function getRoleIcon(emp, size = 64) {
  const rol = (emp.rol_en_cuadrilla || emp.rol || "").toLowerCase();
  const icono = iconosRol[rol] || "fa-solid fa-user text-secondary";
  return `<div class="d-flex align-items-center justify-content-center rounded-circle bg-light me-2 flex-shrink-0" 
               style="width:${size}px;height:${size}px;">
            <i class="${icono} fs-4"></i>
          </div>`;
}

// === Renderizar cards con título desde JS ===
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
}

function renderSupervisorCard(supervisor) {
  const container = document.getElementById("supervisor-container");
  if (!container) return;

  container.innerHTML = `
    <div class="card mb-4">
      <div class="card-header">
        <h5 class="card-title">Supervisor</h5>
      </div>
      <div class="card-body text-center" id="supervisor-card"></div>
    </div>
  `;
  mostrarSupervisor(supervisor);
}

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

// === MAIN ===
function setUserHeader(data) {
  if (!data || data.length === 0) return;
  const u = data[0];

  const fotoUrl = u.imagen && u.imagen.trim() !== "" 
                    ? u.imagen 
                    : "assets/images/user-optional.png";

  document.getElementById("user-foto-menu").src = fotoUrl;
  document.getElementById("user-foto-dropdown").src = fotoUrl;

  document.getElementById("user-nombre").textContent = u.nombre || u.username || "Sin nombre";
  document.getElementById("user-rol").textContent = u.rol || "Usuario";

  // ✅ Ahora los títulos + estructura de cards vienen de aquí
  renderSupervisorCard(u.supervisor);
  renderCuadrillaCard(u.cuadrilla, u);
  renderSucursalesCard(u.sucursales);
}
