const btnAbrirModal = document.querySelector("#btn-abrir-modal");
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
});
