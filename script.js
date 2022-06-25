const btn = document.querySelector(".main__btn");
const modal = document.querySelector(".modal-wrapper");
const btnClose = document.querySelector(".btn-close");
const overlay = document.querySelector(".overlay");

window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
btn.addEventListener("click", function () {
  modal.style.display = "block";
});

btnClose.onclick = function () {
  modal.style.display = "none";
};

overlay.onclick = function () {
    modal.style.display = "none";
  };


