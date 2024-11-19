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

// Detecting the typing of "thickofit" and playing the audio after 1 second
let input = [];
const thickOfItSequence = "thickofit";
const thickOfItAudio = new Audio('idk.mp3'); // Audio for "thickofit"

// Listen for keydown events
window.addEventListener('keydown', function(event) {
    input.push(event.key.toLowerCase());

    // Keep the input array to the length of the target sequence
    if (input.length > thickOfItSequence.length) {
        input.shift();
    }

    // Check if the current input matches the "thickofit" sequence
    if (input.join('') === thickOfItSequence) {
        setTimeout(() => {
            thickOfItAudio.play(); // Play the "thickofit" audio after 1 second
        }, 1000); // 1-second delay
    }
});
