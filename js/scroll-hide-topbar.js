document.addEventListener("DOMContentLoaded", function () {
    var topbar = document.getElementById("topbar");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) { // Adjust the scroll threshold as needed
            topbar.classList.add("hidden");
        } else {
            topbar.classList.remove("hidden");
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    var header = document.getElementById("header");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 100) {
            header.classList.add("scroll-bg");
        } else {
            header.classList.remove("scroll-bg");
        }
    });
});
