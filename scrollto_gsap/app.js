gsap.registerPlugin(ScrollToPlugin);

const menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach((menuItem, idx) => {
    menuItem.addEventListener("click", () => {
        gsap.to(window, {
            duration: 1,
            scrollTo: "#section-" + (idx + 1),
        });
    });
});
