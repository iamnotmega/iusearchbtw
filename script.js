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

// Detecting the typing of "thickofit"
let input = [];
const targetSequence = "thickofit";
const audio = new Audio('idk.mp3'); // Prepare the audio file

window.addEventListener('keydown', function(event) {
    // Append the key pressed to the input array
    input.push(event.key.toLowerCase()); 

    // Keep the input array to the length of the target sequence
    if (input.length > targetSequence.length) {
        input.shift();
    }

    // Check if the current input matches the target sequence
    if (input.join('') === targetSequence) {
        setTimeout(() => {
            audio.play(); // Play the audio after 1 seconds
        }, 1000); // Wait for 1 seconds
    }
});
