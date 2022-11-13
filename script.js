const navMenu = document.getElementById("primary-navigation");


const openMenu = document.getElementById("menu-bar");
openMenu.addEventListener("click", function() {
    navMenu.style.display = "block";
    console.log("clicked")
    document.getElementsByTagName("body")[0].style.overflowY = "hidden";

    
    document.addEventListener("mouseup", function(e) {
        if (!navMenu.contains(e.target)) {
            navMenu.style.display = "none";
            document.getElementsByTagName("body")[0].style.overflowY = "scroll";
        }
    });
});
