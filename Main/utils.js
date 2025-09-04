// utils.js
function formatFecha(fechaStr) {
  if (!fechaStr) return "-";
  const f = new Date(fechaStr);
  if (isNaN(f)) return fechaStr;
  return `${String(f.getDate()).padStart(2, "0")}/${String(f.getMonth() + 1).padStart(2, "0")}/${f.getFullYear()}`;
}

const iconosRol = {
  "técnico": "fa-solid fa-screwdriver-wrench text-primary",
  "vendedor": "fa-solid fa-handshake text-success",
  "almacén": "fa-solid fa-boxes-stacked text-warning",
  "administrador": "fa-solid fa-user-tie text-danger",
  "líder": "fa-solid fa-star text-info",
  "cliente": "fa-solid fa-user text-secondary"
};

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
