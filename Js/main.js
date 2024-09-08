// ui-interactions.js

document.addEventListener("DOMContentLoaded", function () {
    const searchIcon = document.getElementById("search-icon");
    const searchBar = document.getElementById("search-bar");
    const openSidebarBtn = document.getElementById("open-sidebar");
    const sidebarNav = document.getElementById("sidebarNav");

    // Toggle search bar
    if (searchIcon && searchBar) {
        searchIcon.addEventListener("click", function () {
            searchBar.classList.toggle("open");
        });
    }

    // Toggle sidebar navigation
    if (openSidebarBtn && sidebarNav) {
        openSidebarBtn.addEventListener("click", function () {
            sidebarNav.classList.toggle("open");
        });
    }

    // Close sidebar navigation
    if (sidebarNav) {
        sidebarNav.querySelector(".closebtn").addEventListener("click", function () {
            sidebarNav.classList.remove("open");
        });
    }
});
