window.addEventListener("scroll", function () {
    var backToTopButton = document.getElementById("uppar-button");
    if (window.scrollY > 200) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});

document.getElementById("uppar-button").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
