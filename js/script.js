const parllel = document.getElementById("parallel_text");

window.addEventListener("scroll", () => {
    const offset = window.pageYOffset;
    parllel.style.backgroundPositionY = offset * 0.7 + "px";
});