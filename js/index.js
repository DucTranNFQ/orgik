// to top
document.addEventListener("scroll", () => {
    if (window.scrollY > 850) {
        document.getElementById("to-top").style.display = "flex";
    } else {
        document.getElementById("to-top").style.display = "none";
    }
})