// === funciones utilitarias ===
function formatFecha(fechaStr) {
  if (!fechaStr) return "-";
  const f = new Date(fechaStr);
  if (isNaN(f)) return fechaStr;
  const d = String(f.getDate()).padStart(2, "0");
  const m = String(f.getMonth() + 1).padStart(2, "0");
  const y = f.getFullYear();
  return `${d}/${m}/${y}`;
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

// === Inicialización ===
document.addEventListener("DOMContentLoaded", () => {
  google.script.run.withSuccessHandler(setUserHeader).compararUsuarios();
  google.script.run.withSuccessHandler(renderMenu).obtenerMenuUsuario();
  mostrarBreadcrumb();
});

// === Punto de entrada ===
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


    // 🔹 Datos de prueba o de tu servidor
  const mockBusqueda = { 
    titulo: "Búsqueda de Usuarios", 
    descripcion: "Resultados encontrados para la búsqueda." 
  };

  // 🔹 Renderizar el nuevo card de búsqueda
  mostrarBusqueda(mockBusqueda);
}
}
