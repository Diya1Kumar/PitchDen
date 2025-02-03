function showMenu() {
    document.getElementById("navLinks").classList.add("nav-active");
    document.getElementById("menu-icon").style.display = "none";
    document.getElementById("close-icon").style.display = "block";
}

function hideMenu() {
    document.getElementById("navLinks").classList.remove("nav-active");
    document.getElementById("menu-icon").style.display = "block";
    document.getElementById("close-icon").style.display = "none";
}
