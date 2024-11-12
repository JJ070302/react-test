const colors = ["red", "green", "blue", "orange"];
let targetColor;
let startTime;
let gameStarted = false;

const colorToClick = document.getElementById("color-to-click");
const squares = document.querySelectorAll(".square");
const result = document.getElementById("result");

// Start the game by selecting a target color and displaying it
function startGame() {
    targetColor = colors[Math.floor(Math.random() * colors.length)];
    colorToClick.textContent = `Click on: ${targetColor}`;
    colorToClick.style.color = targetColor;
    startTime = new Date().getTime();
    gameStarted = true;
    result.textContent = "";
}

// Handle square click
function handleSquareClick(event) {
    if (!gameStarted) return;

    const clickedColor = event.target.id;

    if (clickedColor === targetColor) {
        const endTime = new Date().getTime();
        const timeTaken = (endTime - startTime) / 1000; // Convert ms to seconds
        result.textContent = `Correct! Time taken: ${timeTaken.toFixed(2)} seconds`;
        gameStarted = false;

        // Restart game after 2 seconds
        setTimeout(startGame, 2000);
    } else {
        result.textContent = "Wrong color! Try again.";
    }
}

// Attach click event listeners to each square
squares.forEach(square => {
    square.addEventListener("click", handleSquareClick);
});

// Start the game on load
startGame();
