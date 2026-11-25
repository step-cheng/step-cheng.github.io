// Display a welcome message in the browser console
console.log("Welcome to Stephen Cheng's profile page!");

// Poster lightbox: click a thumbnail to open the full-size poster.
// Click the dark background or press Esc to close.
document.addEventListener("DOMContentLoaded", function () {
    var box = document.getElementById("lightbox");
    var img = document.getElementById("lightbox-img");
    if (!box || !img) return;

    function close() {
        box.hidden = true;
        img.src = "";
        document.body.style.overflow = "";
    }

    document.querySelectorAll(".poster-thumb").forEach(function (thumb) {
        thumb.addEventListener("click", function () {
            img.src = thumb.dataset.full || thumb.src;
            img.alt = thumb.alt;
            box.hidden = false;
            box.scrollTop = 0;
            document.body.style.overflow = "hidden";
        });
    });

    // Clicks on the poster itself don't close it; clicks on the dark background do
    img.addEventListener("click", function (e) {
        e.stopPropagation();
    });
    box.addEventListener("click", close);
    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && !box.hidden) close();
    });
});
