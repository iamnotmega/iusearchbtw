// Function to toggle between light and dark modes
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-mode');

    // Save the current theme preference in localStorage
    const theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
}

// Load the saved theme from localStorage on window load
window.onload = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
};

// Typing sequence detection for "thickofit"
const typingSequences = {
    "thickofit": {
        audio: new Audio('idk.mp3'),  // Path to audio
        delay: 1000 // 1-second delay
    },
    "konami": {
        audio: new Audio('rickroll.mp3'),
        delay: 1000
    }
};

let inputBuffer = [];
const maxSequenceLength = Math.max(...Object.keys(typingSequences).map(seq => seq.length));

// Function to detect the key sequences
function detectSequence(event) {
    inputBuffer.push(event.key.toLowerCase());
    // Keep the input array to the length of the longest sequence
    if (inputBuffer.length > maxSequenceLength) {
        inputBuffer.shift();
    }

    // Check each sequence
    for (const [sequence, data] of Object.entries(typingSequences)) {
        if (inputBuffer.join('') === sequence) {
            // Play the corresponding audio after a delay
            setTimeout(() => {
                data.audio.play();
            }, data.delay);
        }
    }
}

// Event listener for detecting keydown and triggering the sequences
window.addEventListener('keydown', detectSequence);
