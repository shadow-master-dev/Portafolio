const baseUrl = "<?= baseUrl ?>";

function renderMenu(menuData) {
  const sidebar = document.getElementById("sidebarMenu");
  sidebar.innerHTML = "";

  if (!menuData || !Array.isArray(menuData)) {
    console.error("⚠️ MenuData no es válido:", menuData);
    return;
  }

  menuData.forEach(g => {
    const liTitle = document.createElement("li");
    liTitle.className = "sidebar-title";
    liTitle.innerHTML = `<h6 class="m-0 text-truncate fw-bold small">${g.nombre}</h6>`;
    sidebar.appendChild(liTitle);

    g.items.forEach(m => {
      if (m.submenus && m.submenus.length > 0) {
        const li = document.createElement("li");
        li.className = "treeview";
        li.innerHTML = `
          <a href="#!">
            <i class="bi ${m.icono}"></i>
            <span class="menu-text">${m.nombre}</span>
          </a>
        `;

        const ulSub = document.createElement("ul");
        ulSub.className = "treeview-menu";

        m.submenus.forEach(sub => {
          const liSub = document.createElement("li");
          liSub.innerHTML = `
            <a href="${baseUrl}?page=${sub.accion}">
              <i class="bi ${sub.icono}"></i>
              ${sub.nombre}
            </a>
          `;
          ulSub.appendChild(liSub);
        });

        li.appendChild(ulSub);
        sidebar.appendChild(li);
      } else {
        const li = document.createElement("li");
        li.innerHTML = `
          <a href="${baseUrl}?page=${m.accion}">
            <i class="bi ${m.icono}"></i>
            <span class="menu-text">${m.nombre}</span>
          </a>
        `;
        sidebar.appendChild(li);
      }
    });
  });
}
