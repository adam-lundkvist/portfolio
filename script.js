const navMenu = document.getElementById("primary-navigation");


const openMenu = document.getElementById("menu-bar");
openMenu.addEventListener("click", function() {
    navMenu.style.display = "block";
    document.getElementsByTagName("body")[0].style.overflowY = "hidden";
    const closeNavBtn = document.createElement("div");
    closeNavBtn.innerHTML = `<i class="fa-solid fa-square-xmark"></i>`;
    closeNavBtn.classList.add("close-nav-btn");
    navMenu.appendChild(closeNavBtn);

    closeNavBtn.addEventListener("click", function() {
        navMenu.style.display = "none";
        document.getElementsByTagName("body")[0].style.overflowY = "scroll";
    });

    
    document.addEventListener("mouseup", function(e) {
        if (!navMenu.contains(e.target)) {
            navMenu.style.display = "none";
            document.getElementsByTagName("body")[0].style.overflowY = "scroll";
        }
    });
});
