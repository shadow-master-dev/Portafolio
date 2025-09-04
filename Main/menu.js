// menu.js
const baseUrl = "<?= baseUrl ?>";  // viene del doGet

function renderMenu(menuData) {
  const sidebar = document.getElementById("sidebarMenu");
  sidebar.innerHTML = "";

  if (!menuData || !Array.isArray(menuData)) {
    console.error("⚠️ MenuData no es un array válido:", menuData);
    return;
  }

  // ... tu lógica de renderizado
}
