// Function to toggle between light and dark modes
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-mode');

    // Save the current theme preference in localStorage
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
}

// Load the saved theme from localStorage
window.onload = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
};

// Detecting the typing of "thickofit" and "coconutmall"
let input = [];
const thickOfItSequence = "thickofit";
const coconutMallSequence = "coconutmall";
const thickOfItAudio = new Audio('idk.mp3'); // Audio for "thickofit"
const coconutMallAudio = new Audio('iusearchbtw.mp3'); // Audio for "coconutmall"

window.addEventListener('keydown', function(event) {
    // Append the key pressed to the input array
    input.push(event.key.toLowerCase()); 

    // Keep the input array to the length of the target sequences
    if (input.length > Math.max(thickOfItSequence.length, coconutMallSequence.length)) {
        input.shift();
    }

    // Check if the current input matches the "thickofit" sequence
    if (input.join('') === thickOfItSequence) {
        setTimeout(() => {
            thickOfItAudio.play(); // Play the "thickofit" audio after 1 second
        }, 1000); // Wait for 1 second
    }

    // Check if the current input matches the "coconutmall" sequence
    if (input.join('') === coconutMallSequence) {
        setTimeout(() => {
            coconutMallAudio.play(); // Play the "coconutmall" audio after 1 second
        }, 1000); // Wait for 1 second
    }
});
