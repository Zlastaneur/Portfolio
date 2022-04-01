document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");

    // Header animation on scroll
    window.addEventListener("scroll", () => {
        if (window.scrollY > 0) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    });

    // Animation for projects card
    const openButton = document.querySelectorAll(".openButton");

    for (let i = 0; i < openButton.length; i++) {
        openButton[i].addEventListener("click", openTheBox);
    }

    function openTheBox() {
        const card = this.closest(".projectCard");
        const text = card.querySelector(".projectParagraph");
        const arrow = card.querySelector(".fas");

        if (card.classList.contains("open") == false) {
            console.log("Ouvert");
            card.classList.add("open");
            text.classList.add("projectParagraph_open");
            arrow.classList.add("rotate");
        } else {
            console.log("Fermé");
            card.classList.remove("open");
            text.classList.remove("projectParagraph_open");
            arrow.classList.remove("rotate");
        }
    }

    // Scrolled effects
    const scrollElements = document.querySelectorAll(".js-scroll");

    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;

        return elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend;
    };

    const elementOutofView = (el) => {
        const elementTop = el.getBoundingClientRect().top;

        return elementTop > (window.innerHeight || document.documentElement.clientHeight);
    };

    const displayScrollElement = (element) => {
        element.classList.add("scrolled");
    };

    const hideScrollElement = (element) => {
        element.classList.remove("scrolled");
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            } else if (elementOutofView(el)) {
                hideScrollElement(el);
            }
        });
    };

    // Throttle function for less call and more performance
    let throttleTimer = false;

    const throttle = (callback, time) => {
        if (throttleTimer) return;

        throttleTimer = true;

        setTimeout(() => {
            callback();
            throttleTimer = false;
        }, time);
    };

    window.addEventListener("scroll", () => {
        throttle(handleScrollAnimation, 250);
    });
});
