// Botão de listagem
var modal = document.getElementById("listModal");

var listBtn = document.getElementById("listBtn");

listBtn.onclick = function() {
  modal.style.display = "block";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}