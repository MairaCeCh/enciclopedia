/*const btnAbrirModal = document.querySelector("#btn-abrir-modal");
const btnCerrarModal = document.querySelector("#btn-cerrar-modal");
const modal = document.querySelector("#modal");

const btnAbrirModalA = document.querySelector("#btn-abrir-modalA");
const btnCerrarModalA = document.querySelector("#btn-cerrar-modalA");
const modalA = document.querySelector("#modalA");

btnAbrirModal.addEventListener("click", () => {
  modal.showModal();
});

btnCerrarModal.addEventListener("click", () => {
  modal.close();
});

btnAbrirModalA.addEventListener("click", () => {
  modalA.showModal();
});

btnCerrarModalA.addEventListener("click", () => {
  modal.close();
});*/

// ejercicios concicionales //

/*  let edadUser = parseInt(prompt("cual es tu edad?"));
let edadObligario = 18;
let edadSiQueres = 16;
let edadSiQueres2 = 69;

if (edadUser >= edadObligario && edadUser <= edadSiQueres2) {
  alert("tenes que votar");
} else if (edadUser >= edadSiQueres || edadUser > edadSiQueres2) {
  alert("vota si queres");
} else {
  alert(" no tenes edad para votar");
}

// login ciclo for//

let pass = "may";

for (let i = 0; i < 3; i++) {
  let passU = prompt("ingresa la contrasña");
  if (pass == passU) {
    alert("tu login es exitoso");
    break;
  } else {
    alert("contraseña incorrecta");
  }
}


//ejemplo del ciclo while

let india = prompt("ya llegamos a la india");
let contador = 3;
while (india != "si" && india != "SI" && india != "Si") {
  india = prompt("ya llegamos a la india");
  contador--;
  if (contador <= 0) {
    alert("callate");
    break;
  } else {
    alert("ya me estaba cansando");
  }
}

   //switch

*/
for (let i = 0; i <= 3; i++) {
  let opcion = prompt(
    "elegi la opcion que quieras: \n1- cafe con leche \n2- chocolatada \n3-capuchino \n4- ninguna"
  );

  switch (opcion) {
    case "1":
      alert(" elegiste cafe con leche");
      break;
    case "2":
      alert(" elegiste chocolatada");
      break;
    case "3":
      alert(" elegiste capuchino");
      break;
    case "4":
      alert(" elegiste salir");
      if (opcion == 4) {
        i = 4;
      }
      break;
    default:
      alert("tu opcion no es correcta");
  }
}
