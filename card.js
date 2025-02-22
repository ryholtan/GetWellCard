document.getElementById("envelope").addEventListener("click", function () {
    this.style.opacity = "0";
    setTimeout(() => {
        document.getElementById("cardContainer").style.opacity = "1";
    }, 500);
    this.style.zIndex = "-10";
});

document.getElementById("card").classList.toggle("closed");
if (document.getElementById("card").classList.toggle("closed")) {
    this.style.width = "30%";
}

document.getElementById("card").addEventListener("click", function () {
    const cardFront = document.querySelector(".card-front");
    const cardInner = document.querySelector(".card-inner");

    if (this.classList.contains("closed")) {
        this.style.width = "30%";
        cardFront.style.display = "flex"; // Ensure the front is visible
        cardInner.style.display = "none"; // Hide the inner side
    } else {
        this.style.width = "60%";
        cardFront.style.display = "none"; // Hide the front
        cardInner.style.display = "flex"; // Show the inner side
    }
    this.classList.toggle("closed");
});


// document.getElementById("card").addEventListener("click", function () {
//     const cardFront = document.querySelector(".card-front");
//     const cardInner = document.querySelector(".card-inner");

//     if (this.classList.contains("open")) {
//         // Close the card: show the front and hide the inner
//         this.style.transform = "rotateY(0deg)";
//         cardFront.style.display = "flex"; // Show the front side
//         cardInner.style.display = "none"; // Hide the inner side
//     } else {
//         // Open the card: show the inner side and hide the front
//         this.style.transform = "rotateY(180deg)";
//         cardFront.style.display = "none"; // Hide the front side
//         cardInner.style.display = "flex"; // Show the inner side
//     }
//     this.classList.toggle("open");
// });
