function showBack() {
    var card = document.querySelector(".card");
    card.classList.add("flipped");

}

function showFront() {
    var card= document.querySelector(".card");
    card.classList.remove("flipped");
}