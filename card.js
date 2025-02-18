document.getElementById("envelope").addEventListener("click", function () {
    this.style.opacity = "0";
    setTimeout(() => {
        document.getElementById("cardContainer").style.opacity = "1";
    }, 500);
});

document.getElementById("card").addEventListener("click", function () {
    if (this.classList.contains("open")) {
        this.style.transform = "rotateY(0deg)";
        document.querySelector(".card-inner").style.display = "none";
    } else {
        this.style.transform = "rotateY(180deg)";
        document.querySelector(".card-inner").style.display = "flex";
    }
    this.classList.toggle("open");
});
