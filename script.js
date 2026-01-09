// Highlight Navbar Search Border Dynamically
const searchBox = document.querySelector(".nav-search");

searchBox.addEventListener("mouseenter", () => {
    searchBox.style.border = "2px solid orange";
});
searchBox.addEventListener("mouseleave", () => {
    searchBox.style.border = "none";
});

// Search Button Functionality
document.querySelector(".search-icon").addEventListener("click", () => {
    const query = document.querySelector(".search-input").value.trim();
    if (query === "") {
        alert("Please type something to search!");
    } else {
        alert(`Searching for: ${query}`);
    }
});

// Back to top button functionality (footer)
document.querySelector(".foot-panel1").addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
