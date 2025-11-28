// === NAV MOBILE ===
const sideNavBar = document.getElementById("sideNavBar");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");

if (openBtn && sideNavBar) {
    openBtn.addEventListener("click", (e) => {
        e.preventDefault();
        sideNavBar.classList.add("active");
        sideNavBar.setAttribute("aria-hidden", "false");
    });
}

if (closeBtn && sideNavBar) {
    closeBtn.addEventListener("click", (e) => {
        e.preventDefault();
        sideNavBar.classList.remove("active");
        sideNavBar.setAttribute("aria-hidden", "true");
    });
}

// Clique en dehors pour fermer
document.addEventListener("click", (e) => {
    if (
        sideNavBar.classList.contains("active") &&
        !sideNavBar.contains(e.target) &&
        !openBtn.contains(e.target)
    ) {
        sideNavBar.classList.remove("active");
        sideNavBar.setAttribute("aria-hidden", "true");
    }
});

//GALERIE


const images = document.querySelectorAll('.gallery-img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeGalBtn = document.querySelector('.close-lightbox');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let currentIndex = 0; 

//  Fonction ouverture lightbox
images.forEach((img, index) => {
    img.addEventListener('click', () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src; 
        currentIndex = index; 
        document.body.style.overflow = "hidden"; 
    });
});

// Fonction fermerture lightbox
function closeLightbox() {
    lightbox.style.display = "none";
    document.body.style.overflow = "auto"; 
}

closeBtn.addEventListener('click', closeLightbox);

//Clique endehors pour fermer
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

//  Navigation 
function changeImage(direction) {
    currentIndex += direction;

    // Si on arrive à la fin, on revient au début (boucle)
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    // Si on est au début et qu'on recule, on va à la fin
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    // Mise à jour de l'image
    lightboxImg.src = images[currentIndex].src;
}

// Attacher les événements aux boutons prev/next
nextBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Évite de fermer la lightbox quand on clique sur la flèche
    changeImage(1);
});

prevBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    changeImage(-1);
});

// 5. Navigation au clavier (Flèches et Echap)
document.addEventListener('keydown', (e) => {
    if (lightbox.style.display === "block") {
        if (e.key === "ArrowLeft") changeImage(-1);
        if (e.key === "ArrowRight") changeImage(1);
        if (e.key === "Escape") closeLightbox();
    }
});