// main.js
document.addEventListener("DOMContentLoaded", () => {
  google.script.run.withSuccessHandler(setUserHeader).compararUsuarios();
  google.script.run.withSuccessHandler(renderMenu).obtenerMenuUsuario();
  mostrarBreadcrumb();
});
