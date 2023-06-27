/*function showAlert() { 
    alert(' ¡Hola, esta es una alerta desde javascript!');
 }

 prompt (' Digite Su nombre para acceder');
*/



//Codigo JavaScript para cambiar el nombre, nombre archivo "main.js": // funcion par cambiar nombre
/*function updateName(){
	let nombre = prompt("Cambia tu nombre");
	if(nombre == '') {
		nombre = "usuario Desconocido";
	}
	document.getElementById("usuario").innerHTML = `Bienvenido:${nombre}`;
}

updateName();*/


const form = document.getElementById('myform');

form.addEventListener('submit', function(event) {
	event.preventDefault();
	validateForm();
});

function validateEmail(email) {
	const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/;
	return regex.test(email);
}

function validateForm() {
	const emailInput = document.getElementById('email');
	const email = emailInput.value;

	if (!validateEmail(email)) {
		alert('Por favor, ingrese un correo electrónico válido.');
	} else {
		alert('Correo electrónico enviado correctamente.');
	}
}

document.querySelector("button.button-menu-toggle")
	.addEventListener("click", function() {
		document.querySelector(".nav-links").
			classList.toggle("nav-links-responsive")})
