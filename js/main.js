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

    const openButton = document.querySelectorAll(".openButton");
    console.log(openButton);

    for (let i = 0; i < openButton.length; i++) {
        openButton[i].addEventListener("click", openTheBox);
    }

    function openTheBox() {
        const card = this.closest(".projectCard");
        console.log(this);
        const text = card.querySelector(".projectParagraph");
        console.log(text);

        console.log(card);
        if (card.classList.contains("open") == false) {
            console.log("Ouvert");
            card.classList.add("open");
            text.classList.add("projectParagraph_open");
        } else {
            console.log("Fermé");
            card.classList.remove("open");
            text.classList.remove("projectParagraph_open");
        }
    }
});
