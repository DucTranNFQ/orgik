// to top
document.addEventListener("scroll", () => {

    //header sticky
    if (window.scrollY > 20) {
        document.getElementById("header").classList.add("header-sticky");
    } else {
        document.getElementById("header").classList.remove("header-sticky");
    }

    if (window.scrollY > 850) {
        document.getElementById("to-top").style.display = "flex";
    } else {
        document.getElementById("to-top").style.display = "none";
    }
    
})

document.getElementById("searchInput").addEventListener("focusin", function() {
    document.querySelector(".header-search").style.borderColor = "#5da88a";
});

document.getElementById("searchInput").addEventListener("focusout", function() {
    document.querySelector(".header-search").style.borderColor = "#e2e2e2";
});


