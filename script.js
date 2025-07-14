function abrirModal() {
  document.getElementById("modal").style.display = "flex";
}

function cerrarModal() {
  document.getElementById("modal").style.display = "none";
}

function mostrarRegistro() {
  document.getElementById("form-login").classList.add("hidden");
  document.getElementById("form-register").classList.remove("hidden");
}

function mostrarLogin() {
  document.getElementById("form-register").classList.add("hidden");
  document.getElementById("form-login").classList.remove("hidden");
}

// Cerrar modal al hacer clic fuera
window.onclick = function(event) {
  const modal = document.getElementById("modal");
  if (event.target == modal) {
    cerrarModal();
  }
}
