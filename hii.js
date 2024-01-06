document.addEventListener('DOMContentLoaded', function () {
    // Function to change the background color
    function changeBackgroundColor() {
        const colors = ['#ffcccb', '#c2e0c6', '#ffd700', '#c9a0dc'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.style.backgroundColor = randomColor;
    }

    // Add an event listener to the button
    const changeColorButton = document.getElementById('changeColorButton');
    if (changeColorButton) {
        changeColorButton.addEventListener('click', changeBackgroundColor);
    }
});
