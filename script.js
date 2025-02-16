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

// function showMenu() {
//     document.getElementById("navLinks").classList.add("nav-active");
//     document.getElementById("menu-icon").style.display = "none";
//     document.getElementById("close-icon").style.display = "block";
// }

// function hideMenu() {
//     document.getElementById("navLinks").classList.remove("nav-active");
//     document.getElementById("menu-icon").style.display = "block";
//     document.getElementById("close-icon").style.display = "none";
// }
function showMenu() {
    document.getElementById("navLinks").classList.add("nav-active");
    document.getElementById("close-icon").style.display = "block"; // Ensure close icon is visible
}

function hideMenu() {
    document.getElementById("navLinks").classList.remove("nav-active");
    document.getElementById("close-icon").style.display = "none"; // Hide close icon when closing
}

// const carousel = document.querySelector(".carousel");

// let isDragging= false;

// const dragStart = () => {
//     isDragging= true;
// }

// const dragging = (e) => {
//     if(!isDragging) return;
//     carousel.scrollLeft = e.pageX;
// }
// carousel.addEventListener("mousedown", dragStart);
// carousel.addEventListener("mousemove", dragging);
const carousel = document.querySelector(".carousel");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

const updateCardWidth = () => {
    return document.querySelector(".card").offsetWidth + 10; // Get card width including margin
};

// Move carousel on button click
next.addEventListener("click", () => {
    carousel.scrollLeft += updateCardWidth(); // Scroll by one card width
});

prev.addEventListener("click", () => {
    carousel.scrollLeft -= updateCardWidth();
});

// Drag functionality
let isDragging = false, startX, scrollLeft;

const startDrag = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    startX = e.pageX || e.touches[0].pageX;
    scrollLeft = carousel.scrollLeft;
};

const onDrag = (e) => {
    if (!isDragging) return;
    const x = e.pageX || e.touches[0].pageX;
    const walk = (x - startX) * 2;
    carousel.scrollLeft = scrollLeft - walk;
};

const stopDrag = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
};

// Event listeners for dragging
carousel.addEventListener("mousedown", startDrag);
carousel.addEventListener("mousemove", onDrag);
carousel.addEventListener("mouseup", stopDrag);
carousel.addEventListener("mouseleave", stopDrag);
carousel.addEventListener("touchstart", startDrag);
carousel.addEventListener("touchmove", onDrag);
carousel.addEventListener("touchend", stopDrag);
