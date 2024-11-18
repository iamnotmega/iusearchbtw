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
