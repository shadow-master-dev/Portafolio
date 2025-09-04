// breadcrumb.js
function mostrarBreadcrumb() {
  const pageTitleEl = document.getElementById("page-title");
  const breadcrumbEl = document.getElementById("breadcrumb");

  if (!pageTitleEl || !breadcrumbEl) return;

  const params = new URLSearchParams(window.location.search);
  const pageParam = params.get("page") || "Main/index";
  const parts = pageParam.split("/").map(p => p.toLowerCase());

  const mapNames = { "main": "Principal", "index": "", "base": "Base" };
  const translated = parts
    .map(p => mapNames[p] ?? (p.charAt(0).toUpperCase() + p.slice(1)))
    .filter(p => p !== "");

  const pageName = translated.at(-1) || "Principal";
  pageTitleEl.textContent = pageName;

  breadcrumbEl.innerHTML = "";

  const liHome = document.createElement("li");
  liHome.className = "breadcrumb-item";
  liHome.innerHTML = `<a href="?page=Main/index">Principal</a>`;
  breadcrumbEl.appendChild(liHome);

  translated.slice(1).forEach((seg, idx, arr) => {
    const li = document.createElement("li");
    if (idx === arr.length - 1) {
      li.className = "breadcrumb-item active";
      li.setAttribute("aria-current", "page");
      li.textContent = seg;
    } else {
      li.className = "breadcrumb-item";
      li.innerHTML = `<a href="#">${seg}</a>`;
    }
    breadcrumbEl.appendChild(li);
  });
}
