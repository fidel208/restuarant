import "./style.css";

const buttons = document.querySelectorAll("button");

const homeBtn = document.getElementById("home");
const menuBtn = document.getElementById("menu");
const aboutBtn = document.getElementById("about");
const contactBtn = document.getElementById("contact");
const homeTab = document.getElementById("home-tab");
const menuTab = document.getElementById("menu-tab");
const aboutTab = document.getElementById("about-tab");
const contactTab = document.getElementById("contact-tab");

homeBtn.addEventListener("click", function() {
    homeBtn.classList.add("active");
    menuBtn.classList.remove("active");
    aboutBtn.classList.remove("active");
    contactBtn.classList.remove("active");

    homeTab.style.display = "grid";
    menuTab.style.display = "none";
    aboutTab.style.display = "none";
    contactTab.style.display = "none";

});

menuBtn.addEventListener("click", function() {
    homeBtn.classList.remove("active");
    menuBtn.classList.add("active");
    aboutBtn.classList.remove("active");
    contactBtn.classList.remove("active");

    homeTab.style.display = "none";
    menuTab.style.display = "grid";
    aboutTab.style.display = "none";
    contactTab.style.display = "none";

});

aboutBtn.addEventListener("click", function() {
    homeBtn.classList.remove("active");
    menuBtn.classList.remove("active");
    aboutBtn.classList.add("active");
    contactBtn.classList.remove("active");

    homeTab.style.display = "none";
    menuTab.style.display = "none";
    aboutTab.style.display = "flex";
    contactTab.style.display = "none";

});

contactBtn.addEventListener("click", function() {
    homeBtn.classList.remove("active");
    menuBtn.classList.remove("active");
    aboutBtn.classList.remove("active");
    contactBtn.classList.add("active");

    homeTab.style.display = "none";
    menuTab.style.display = "none";
    aboutTab.style.display = "none";
    contactTab.style.display = "block";

});