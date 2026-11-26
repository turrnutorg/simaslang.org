function awaken() {
    const hamburgerBtn = document.getElementById("hamburger-btn");
    const navLinks = document.getElementById("nav-links");
    const navLinksDiv = document.getElementById("nav-links-div");

    console.log(hamburgerBtn);

    hamburgerBtn.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("open");
        navLinksDiv.classList.toggle("open");
        console.log(isOpen);
        hamburgerBtn.setAttribute("aria-expanded", isOpen);
    });
}