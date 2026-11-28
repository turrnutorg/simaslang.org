function awaken() {
    const hamburgerBtn = document.getElementById("hamburger-btn");
    const navLinks = document.getElementById("nav-links");
    const navLinksDiv = document.getElementById("nav-links-div");

    hamburgerBtn.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("open");
        navLinksDiv.classList.toggle("open");
        hamburgerBtn.setAttribute("aria-expanded", isOpen);
    });
}