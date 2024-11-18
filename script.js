// Check if the user has a saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.body.classList.add(savedTheme);
}

// Select the main text element and the body
const mainText = document.getElementById('main-text');
const body = document.body;

// Add event listener for clicks anywhere except the text
body.addEventListener('click', function(event) {
    // Check if the click target is not the main text
    if (event.target !== mainText) {
        // Toggle dark mode on body
        body.classList.toggle('dark-mode');
        // Save the theme preference in localStorage
        localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark-mode' : '');
    }
});
