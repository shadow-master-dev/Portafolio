// supervisor.js
function mostrarSupervisor(supervisor) {
  const card = document.getElementById("supervisor-card");
  if (!card) return;

  if (supervisor) {
    card.innerHTML = `...`; // aquí va tu template
  } else {
    card.innerHTML = `<p class="text-muted">No tiene supervisor asignado</p>`;
  }
}
