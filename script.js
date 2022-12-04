const openMenu = document.getElementById("hamburger-open");
openMenu.addEventListener("click", function() {
    const navMenu = document.getElementById("primary-navigation");
    const closeNavBtn = document.getElementById("hamburger-close");
    openMenu.style.display = "none";
    closeNavBtn.style.display = "block";
    navMenu.style.display = "block";
    document.getElementsByTagName("body")[0].style.overflowY = "hidden";

    const runQueryNavChange = window.setInterval(function(){
        queryNavChange();
    }, 0.01);

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

// Toggles navbars between mobile and computer friendly depending on the screen size.
function queryNavChange() {
    const mediaQ = window.matchMedia("(min-width: 801px)")
    const media2 = window.matchMedia("(max-width: 800px)")
    const navMenu = document.getElementById("primary-navigation");
    if ((mediaQ.matches) && (navMenu.style.display === "block")) {
        navMenu.style.display = "flex";
    } else if ((media2.matches) && (navMenu.style.display === "flex")) {
        navMenu.style.display = "block";
    }
}
