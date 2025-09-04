function mostrarBreadcrumb() {
  const pageTitleEl = document.getElementById("page-title");
  const breadcrumbEl = document.getElementById("breadcrumb");

  if (!pageTitleEl || !breadcrumbEl) return;

  const params = new URLSearchParams(window.location.search);
  const pageParam = params.get("page") || "Main/index";

  breadcrumbEl.innerHTML = "";

  // Home siempre primero
  const liHome = document.createElement("li");
  liHome.className = "breadcrumb-item";
  liHome.innerHTML = `<a href="?page=Main/index">Principal</a>`;
  breadcrumbEl.appendChild(liHome);

  // Buscar en el mapa
  const info = breadcrumbMap[pageParam];
  if (info) {
    // Grupo (si existe)
    if (info.grupo && info.grupo !== "Principal") {
      const liGrupo = document.createElement("li");
      liGrupo.className = "breadcrumb-item";
      liGrupo.textContent = info.grupo;
      breadcrumbEl.appendChild(liGrupo);
    }

    // Padre (si existe, ej: un submenú dentro de otro menú)
    if (info.padre) {
      const liPadre = document.createElement("li");
      liPadre.className = "breadcrumb-item";
      liPadre.textContent = info.padre;
      breadcrumbEl.appendChild(liPadre);
    }

    // Nombre final
    const liPage = document.createElement("li");
    liPage.className = "breadcrumb-item active";
    liPage.setAttribute("aria-current", "page");
    liPage.textContent = info.nombre;
    breadcrumbEl.appendChild(liPage);

    // Título
    pageTitleEl.textContent = info.nombre;
  } else {
    // Si no está en el mapa → fallback
    pageTitleEl.textContent = "Principal";
  }
}
