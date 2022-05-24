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

// carousel
let currentIndex = 0;
const carouselList = document.querySelectorAll(".carousel-item.card");
const carouselLength = carouselList.length;

function slideCarousel(number) {
    if ((currentIndex + number) == carouselLength) {
        currentIndex = 0;
    } else if ((currentIndex + number) < 0) {
        currentIndex = carouselLength-1;
    } else {
        currentIndex += number;
    }
    showCarousel(currentIndex)
}

function showCarousel(index) {
    console.log(index);

    // Remove all previous active and display
    for (elem of carouselList) {
        elem.classList.remove("active");
        elem.classList.remove("d-lg-flex");
        elem.style.order = "0";
    }

    // for active element
    carouselList[index].classList.add("active");
    carouselList[index].classList.add("d-lg-flex");
    carouselList[index].style.order = "2";


    // for beside active element
    if (index == 0) {
        carouselList[carouselLength-1].classList.add("d-lg-flex");
        carouselList[carouselLength-1].style.order = "1";
        carouselList[index+1].classList.add("d-lg-flex");
        carouselList[index+1].style.order = "3";
    } else if (index == (carouselLength-1)) {
        carouselList[0].classList.add("d-lg-flex");
        carouselList[0].style.order = "3";
        carouselList[index-1].classList.add("d-lg-flex");
        carouselList[index-1].style.order = "1";
    } else {
        carouselList[index-1].classList.add("d-lg-flex");
        carouselList[index-1].style.order = "1";
        carouselList[index+1].classList.add("d-lg-flex");
        carouselList[index+1].style.order = "3";
    }
};
showCarousel(currentIndex);

window.addEventListener("load", function() {
    const timeOut = setTimeout(() => {
        document.querySelector("#preloader").style.display = "none";
    }, 500)
})