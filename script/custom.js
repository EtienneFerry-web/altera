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
