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

window.onclick = function(event) {
  const modal = document.getElementById("modal");
  if (event.target == modal) cerrarModal();
}

// Mostrar usuario si ya está logueado
function actualizarEstadoUsuario() {
  const datos = JSON.parse(localStorage.getItem("usuarioActivo"));
  const btnLogin = document.getElementById("btn-login");
  const saludo = document.getElementById("saludo");
  const emailSpan = document.getElementById("usuario-nombre");
  const btnCerrar = document.getElementById("cerrar-sesion");

  if (datos) {
    btnLogin.classList.add("hidden");
    saludo.classList.remove("hidden");
    btnCerrar.classList.remove("hidden");
    emailSpan.textContent = datos.nombre;
  } else {
    btnLogin.classList.remove("hidden");
    saludo.classList.add("hidden");
    btnCerrar.classList.add("hidden");
    emailSpan.textContent = "";
  }
}

// Guardar usuario al registrarse
document.querySelector('#form-register button').addEventListener('click', function() {
  const nombre = document.querySelector('#form-register input[type="text"]').value;
  const correo = document.querySelector('#form-register input[type="email"]').value;
  const pass = document.querySelector('#form-register input[type="password"]').value;

  if (!correo || !pass || !nombre) {
    alert('Completa todos los campos');
    return;
  }

  localStorage.setItem('usuario', JSON.stringify({ nombre, correo, pass }));
  alert('Registro exitoso ✅');
  mostrarLogin();
});

// Verificar login
document.querySelector('#form-login button').addEventListener('click', function() {
  const correo = document.querySelector('#form-login input[type="email"]').value;
  const pass = document.querySelector('#form-login input[type="password"]').value;
  const guardado = JSON.parse(localStorage.getItem('usuario'));

  if (!guardado) {
    alert('No hay ningún usuario registrado');
    return;
  }

  if (correo === guardado.correo && pass === guardado.pass) {
    alert('Inicio de sesión exitoso ✅');
    localStorage.setItem('usuarioActivo', JSON.stringify({ nombre: guardado.nombre }));
    cerrarModal();
    actualizarEstadoUsuario();
  } else {
    alert('Correo o contraseña incorrectos ❌');
  }
});

// Cerrar sesión
document.getElementById("cerrar-sesion").addEventListener("click", function() {
  localStorage.removeItem("usuarioActivo");
  actualizarEstadoUsuario();
});

// Mostrar el estado al cargar la página
actualizarEstadoUsuario();
