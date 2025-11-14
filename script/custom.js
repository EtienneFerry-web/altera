//NavBar Mobile
//Déclaration variable

var sideNavBar = document.getElementById("sideNavBar");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

// Sécurité : vérifier que les éléments existent avant d'attacher des handlers
if (openBtn) {
  openBtn.addEventListener('click', function(e) {
    e.preventDefault();
    sideNavBar.classList.add("active");
  });
}

if (closeBtn) {
  closeBtn.addEventListener('click', function(e) {
    e.preventDefault();
    sideNavBar.classList.remove("active");
  });
}

// Clique en dehors du menu  pour fermer
document.addEventListener('click', function(e) {
  if (!sideNavBar.contains(e.target) && !openBtn.contains(e.target)) {
    sideNavBar.classList.remove('active');
  }
});