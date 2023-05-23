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
