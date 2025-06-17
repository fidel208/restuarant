import createHome from "./home.js";

export default function loadPage() {
    const content = document.getElementById("content");
    content.appendChild(createHome());

    document.getElementById("home").classList.add("active");
}