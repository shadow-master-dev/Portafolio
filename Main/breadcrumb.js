function updateBreadcrumb(grupo, item, subitem) {
  const pageTitleEl = document.getElementById("page-title");
  const breadcrumbEl = document.getElementById("breadcrumb");

  if (!pageTitleEl || !breadcrumbEl) return;

  // === Título ===
  pageTitleEl.textContent = subitem || item || grupo || "Principal";

  // === Breadcrumb ===
  breadcrumbEl.innerHTML = "";

  // Siempre empieza con Principal
  const liHome = document.createElement("li");
  liHome.className = "breadcrumb-item";
  liHome.innerHTML = `<a href="?page=Main/index">Principal</a>`;
  breadcrumbEl.appendChild(liHome);

  if (grupo) {
    const liGrupo = document.createElement("li");
    liGrupo.className = "breadcrumb-item";
    liGrupo.textContent = grupo;
    breadcrumbEl.appendChild(liGrupo);
  }

  if (item) {
    const liItem = document.createElement("li");
    liItem.className = "breadcrumb-item";
    if (!subitem) {
      liItem.classList.add("active");
      liItem.setAttribute("aria-current", "page");
    }
    liItem.textContent = item;
    breadcrumbEl.appendChild(liItem);
  }

  if (subitem) {
    const liSub = document.createElement("li");
    liSub.className = "breadcrumb-item active";
    liSub.setAttribute("aria-current", "page");
    liSub.textContent = subitem;
    breadcrumbEl.appendChild(liSub);
  }
}
