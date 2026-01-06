const noBtn = document.getElementById("noBtn");
const popup = document.getElementById("popup");
const container = document.querySelector(".buttons");

// Function to move No button randomly inside container
function moveNoBtn() {
    const containerRect = container.getBoundingClientRect();
    const maxX = containerRect.width - noBtn.offsetWidth;
    const maxY = containerRect.height - noBtn.offsetHeight;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

// Desktop + Mobile
noBtn.addEventListener("mouseover", moveNoBtn);
noBtn.addEventListener("touchstart", moveNoBtn);

document.getElementById("yesBtn").addEventListener("click", () => {
    popup.style.display = "block";
});

function closePopup() {
    popup.style.display = "none";
}