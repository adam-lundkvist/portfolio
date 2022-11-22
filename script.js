const openMenu = document.getElementById("hamburger-open");
openMenu.addEventListener("click", function() {
    const navMenu = document.getElementById("primary-navigation");
    const closeNavBtn = document.getElementById("hamburger-close");
    openMenu.style.display = "none";
    closeNavBtn.style.display = "block";
    navMenu.style.display = "block";
    document.getElementsByTagName("body")[0].style.overflowY = "hidden";

    closeNavBtn.addEventListener("click", function() {
        navMenu.style.display = "none";
        openMenu.style.display = "block";
        closeNavBtn.style.display = "none";
        document.getElementsByTagName("body")[0].style.overflowY = "scroll";
    });

    document.addEventListener("mouseup", function(e) {
        if (!navMenu.contains(e.target)) {
            navMenu.style.display = "none";
            openMenu.style.display = "block";
            closeNavBtn.style.display = "none";
            document.getElementsByTagName("body")[0].style.overflowY = "scroll";
        }
    });
});
