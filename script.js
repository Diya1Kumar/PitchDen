// Function to handle menu state based on screen size
function resetMenuOnResize() {
    if (window.innerWidth > 877) {
        // Hide both icons when in desktop view
        document.getElementById("menu-icon").style.display = "none";
        document.getElementById("close-icon").style.display = "none";
        
        // Make sure the menu is closed
        document.getElementById("navLinks").classList.remove("nav-active");
    } else {
        // In mobile view, the icons should show
        document.getElementById("menu-icon").style.display = "block";
        document.getElementById("close-icon").style.display = "none";
    }
}

// Add event listeners for window resize and page load
window.addEventListener('resize', resetMenuOnResize);
window.addEventListener('load', resetMenuOnResize);

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
