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

// Первая форма
var form1 = document.querySelector(".header__form");
var submitBtn1 = form1.querySelector(".header__form-submit");

submitBtn1.addEventListener("click", function () {
    var name = form1.querySelector(".header__form-name").value;
    var phone = form1.querySelector(".header__form-phone").value;
    sendEmail(name, phone);
});

// Вторая форма
var form2 = document.querySelector(".contacts__form");
var submitBtn2 = form2.querySelector(".contacts__form_submit");

submitBtn2.addEventListener("click", function () {
    var name = form2.querySelector(".header__form-name").value;
    var phone = form2.querySelector(".header__form-phone").value;
    var text = form2.querySelector(".contacts__form-text").value;
    sendEmail(name, phone, text);
});

// Третья форма
var form3 = document.querySelectorAll(".contacts__form")[1];
var submitBtn3 = form3.querySelector(".contacts__form_submit");

submitBtn3.addEventListener("click", function () {
    var name = form3.querySelector(".header__form-name").value;
    var phone = form3.querySelector(".header__form-phone").value;
    var text = form3.querySelector(".contacts__form-text").value;
    sendEmail(name, phone, text);
});

function sendEmail(event) {
    event.preventDefault(); // Предотвращаем стандартное поведение формы (перенаправление)

    var form = event.target;
    var name = form.elements["name"].value;
    var phone = form.elements["phone"].value;

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "sender.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                console.log("Email sent successfully");
                // Здесь можно добавить код для обработки успешной отправки письма
            } else {
                console.error("Error sending email");
                // Здесь можно добавить код для обработки ошибки при отправке письма
            }
        }
    };

    var data = "name=" + encodeURIComponent(name) + "&phone=" + encodeURIComponent(phone);
    xhr.send(data);
}
