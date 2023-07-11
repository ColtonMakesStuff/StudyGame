let noMenu = document.getElementById("menuButton")
let popup = document.getElementById("menuBox")

function openPopup () {
   popup.classList.add("open-popup");
   noMenu.classList.add("noMenu");
}
 popup.addEventListener("mouseleave", function() {
    closeMenu();
 });
 function closeMenu() {
    popup.classList.remove("open-popup");
    noMenu.classList.remove("noMenu");
 }
