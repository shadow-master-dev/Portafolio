function mostrarBreadcrumb() {
  const pageTitleEl = document.getElementById("page-title");
  const breadcrumbEl = document.getElementById("breadcrumb");

  if (!pageTitleEl || !breadcrumbEl) return;

  // Obtener parámetro page
  const params = new URLSearchParams(window.location.search);
  const pageParam = params.get("page") || "Main/index";

  // Dividir en segmentos (ejemplo: BD/carga → ["BD", "carga"])
  const parts = pageParam.split("/").filter(p => p.trim() !== "");

  // Traducciones opcionales
  const mapNames = {
    "main": "Principal",
    "index": "", // se omite
    "bd": "BD"
    // puedes añadir más alias
  };

  // Traducir y normalizar (capitalizar)
  const translated = parts.map(p => {
    const lower = p.toLowerCase();
    if (mapNames[lower] !== undefined) return mapNames[lower];
    return p.charAt(0).toUpperCase() + p.slice(1);
  }).filter(p => p !== "");

  // === Título ===
  const pageName = translated.at(-1) || "Principal";
  pageTitleEl.textContent = pageName;

  // === Breadcrumb ===
  breadcrumbEl.innerHTML = "";

  // Siempre arrancamos con "Principal"
  const liHome = document.createElement("li");
  liHome.className = "breadcrumb-item";
  liHome.innerHTML = `<a href="?page=Main/index">Principal</a>`;
  breadcrumbEl.appendChild(liHome);

  // Recorrer las partes desde la 1 en adelante
  let currentPath = "";
  translated.forEach((seg, idx) => {
    currentPath += "/" + parts[idx]; // reconstruir ruta parcial
    const li = document.createElement("li");

    if (idx === translated.length - 1) {
      // Último → activo
      li.className = "breadcrumb-item active";
      li.setAttribute("aria-current", "page");
      li.textContent = seg;
    } else {
      // Intermedio → link
      li.className = "breadcrumb-item";
      li.innerHTML = `<a href="?page=${parts.slice(0, idx + 1).join("/")}">${seg}</a>`;
    }

    breadcrumbEl.appendChild(li);
  });
}
