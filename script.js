// POPUPS
const sliderPickers = document.querySelectorAll(".product__button");
const mainPop = document.querySelector(".form__popup");
function showPopup() {
    sliderPickers.forEach((picker) => {
        picker.addEventListener("click", (event) => {
            event.stopPropagation(); // Остановить всплытие события, чтобы не сработал обработчик для закрытия попапа
            mainPop.classList.add("visible");
        });
    });

    document.addEventListener("click", (event) => {
        if (!mainPop.contains(event.target) && !event.target.classList.contains("product__button")) {
            mainPop.classList.remove("visible");
        }
    });
}

showPopup();

const secondPopUp = document.querySelector(".secondary__popup");
const submitsBtn = document.querySelectorAll(".getcall");

submitsBtn.forEach((sub) => {
    sub.addEventListener("click", () => {
        secondPopUp.classList.add("visible");
        mainPop.classList.remove("visible");
    });
});

secondPopUp.addEventListener("click", () => {
    secondPopUp.classList.remove("visible");
});

// POPUPS
// SMOOTTH SCROLL
const anchors = document.querySelectorAll('a[href*="#"]');
for (let anchor of anchors) {
    anchor.addEventListener("click", (e) => {
        e.preventDefault();
        const blockID = anchor.getAttribute("href");
        document.querySelector("" + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    });
}

//BURGER MENU

const burgerBtn = document.querySelector(".burger__menu");
const sideMenu = document.querySelector(".header__nav");

burgerBtn.addEventListener("click", () => {
    const btnItems = document.querySelectorAll(".burger__menu-item").forEach((item) => {
        item.classList.toggle("burger__menu-item--close");
    });
    sideMenu.classList.toggle("header__nav--active");
});
